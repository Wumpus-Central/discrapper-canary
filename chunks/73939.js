"use strict";
n.d(t, { F: () => a }), n(321073);
var r = n(64700),
    i = n(480960);
class a extends r.Component {
    static defaultProps = {
        component: "span",
        transitionAppear: !0,
        transitionLeave: !0,
        transitionEnter: !0,
        childFactory: null,
    };
    static getDerivedStateFromProps(e, t) {
        let { children: n, firstRender: r } = t,
            a = (0, i.p)(e.children);
        return { children: r ? a : (0, i.a)(n, a), firstRender: !1 };
    }
    _currentlyTransitioningKeys;
    _keysToEnter;
    _keysToLeave;
    _isMounted;
    _keyChildMapping = {};
    constructor(e) {
        super(e),
            (this.state = { children: (0, i.p)(e.children), firstRender: !0 }),
            (this._currentlyTransitioningKeys = new Set()),
            (this._keysToEnter = []),
            (this._keysToLeave = []),
            (this._isMounted = !1);
    }
    componentDidMount() {
        this._isMounted = !0;
        let { children: e } = this.state;
        if (this.props.transitionAppear) for (let t in e) e[t] && this.performAppear(t);
    }
    componentWillUnmount() {
        (this._isMounted = !1), (this._keyChildMapping = {}), (this.state.children = {});
    }
    componentDidUpdate(e, t) {
        if (
            e.children !== this.props.children ||
            e.transitionAppear !== this.props.transitionAppear ||
            e.transitionLeave !== this.props.transitionLeave
        ) {
            let e = (0, i.p)(this.props.children),
                n = t.children;
            if (
                (this.props.transitionEnter
                    ? this._enqueueTransitions(e, n, this._keysToEnter)
                    : this._keysToEnter.length > 0 && (this._keysToEnter = []),
                this.props.transitionLeave)
            )
                this._enqueueTransitions(n, e, this._keysToLeave);
            else {
                let t = [];
                this._enqueueTransitions(n, e, t);
                let r = (0, i.a)(n, e);
                for (let e = 0, n = t.length; e < n; e++) delete r[t[e]];
                this._isMounted && this.setState({ children: r }),
                    this._keysToLeave.length > 0 && (this._keysToLeave = []);
            }
        }
        if (this._keysToEnter.length > 0) {
            let e = this._keysToEnter;
            (this._keysToEnter = []), e.forEach(this.performEnter, this);
        }
        if (this._keysToLeave.length > 0) {
            let e = this._keysToLeave;
            (this._keysToLeave = []), e.forEach(this.performLeave, this);
        }
    }
    _enqueueTransitions(e, t, n) {
        for (let r in e) {
            let i = t && t.hasOwnProperty(r);
            !e[r] || i || this._currentlyTransitioningKeys.has(r) || n.push(r);
        }
    }
    _perform(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._currentlyTransitioningKeys.add(e);
        let i = () => this._handleDonePerform(e, n, r),
            a = this._keyChildMapping[e];
        null != a && null != a[t] ? a[t](i) : i();
    }
    _handleDonePerform(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = this._keyChildMapping[e];
        null != r && null != r[t] && r[t](), this._currentlyTransitioningKeys.delete(e);
        let a = (0, i.p)(this.props.children);
        n
            ? null != a && a.hasOwnProperty(e)
                ? this.performEnter(e)
                : this.setState((t) => {
                      let { children: n } = t,
                          { [e]: r, ...i } = n;
                      return { children: i };
                  })
            : (null != a && a.hasOwnProperty(e)) || this.performLeave(e);
    }
    performAppear(e) {
        this._perform(e, "componentWillAppear", "componentDidAppear");
    }
    performEnter(e) {
        this._perform(e, "componentWillEnter", "componentDidEnter");
    }
    performLeave(e) {
        this._perform(e, "componentWillLeave", "componentDidLeave", !0);
    }
    addChildRef = (e, t) => {
        this._keyChildMapping[e] = t;
    };
    render() {
        let { childFactory: e, component: t } = this.props,
            { children: n } = this.state,
            i = [];
        for (let t in n) {
            let a = n[t];
            null != a &&
                r.isValidElement(a) &&
                i.push(r.cloneElement(null == e ? a : e(a), { ref: (e) => this.addChildRef(t, e), key: t }));
        }
        let s = { ...this.props };
        return Object.keys(a.defaultProps).forEach((e) => delete s[e]), r.createElement(t, s, i);
    }
}
