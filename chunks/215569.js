r.d(n, {
    W: function () {
        return c;
    }
});
var i,
    a = r(653041);
var o = r(47120);
var s = r(192379),
    l = r(830483);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class c extends (i = s.Component) {
    static getDerivedStateFromProps(e, n) {
        let { children: r, firstRender: i } = n,
            a = (0, l.n)(e.children);
        return {
            children: i ? a : (0, l.B)(r, a),
            firstRender: !1
        };
    }
    componentDidMount() {
        this._isMounted = !0;
        let { children: e } = this.state;
        if (this.props.transitionAppear) for (let n in e) e[n] && this.performAppear(n);
    }
    componentWillUnmount() {
        (this._isMounted = !1), (this._keyChildMapping = {}), (this.state.children = {});
    }
    componentDidUpdate(e, n) {
        if (e !== this.props) {
            let e = (0, l.n)(this.props.children),
                r = n.children;
            if ((this.props.transitionEnter ? this._enqueueTransitions(e, r, this._keysToEnter) : this._keysToEnter.length && (this._keysToEnter = []), this.props.transitionLeave)) this._enqueueTransitions(r, e, this._keysToLeave);
            else {
                let n = [];
                this._enqueueTransitions(r, e, n);
                let i = (0, l.B)(r, e);
                for (let e = 0, r = n.length; e < r; e++) delete i[n[e]];
                this._isMounted && this.setState({ children: i }), this._keysToLeave.length && (this._keysToLeave = []);
            }
        }
        if (this._keysToEnter.length) {
            let e = this._keysToEnter;
            (this._keysToEnter = []), e.forEach(this.performEnter, this);
        }
        if (this._keysToLeave.length) {
            let e = this._keysToLeave;
            (this._keysToLeave = []), e.forEach(this.performLeave, this);
        }
    }
    _enqueueTransitions(e, n, r) {
        for (let i in e) {
            let a = n && n.hasOwnProperty(i);
            e[i] && !a && !this._currentlyTransitioningKeys.has(i) && r.push(i);
        }
    }
    _perform(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._currentlyTransitioningKeys.add(e);
        let a = () => this._handleDonePerform(e, r, i),
            o = this._keyChildMapping[e];
        null != o && null != o[n] ? o[n](a) : a();
    }
    _handleDonePerform(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this._keyChildMapping[e];
        null != i && null != i[n] && i[n](), this._currentlyTransitioningKeys.delete(e);
        let a = (0, l.n)(this.props.children);
        r
            ? null != a && a.hasOwnProperty(e)
                ? this.performEnter(e)
                : this.setState((n) => {
                      let { children: r } = n,
                          { [e]: i, ...a } = r;
                      return { children: a };
                  })
            : (null == a || !a.hasOwnProperty(e)) && this.performLeave(e);
    }
    performAppear(e) {
        this._perform(e, 'componentWillAppear', 'componentDidAppear');
    }
    performEnter(e) {
        this._perform(e, 'componentWillEnter', 'componentDidEnter');
    }
    performLeave(e) {
        this._perform(e, 'componentWillLeave', 'componentDidLeave', !0);
    }
    render() {
        let { childFactory: e, component: n } = this.props,
            { children: r } = this.state,
            i = [];
        for (let n in r) {
            let a = r[n];
            null != a &&
                s.isValidElement(a) &&
                i.push(
                    s.cloneElement(null == e ? a : e(a), {
                        ref: (e) => this.addChildRef(n, e),
                        key: n
                    })
                );
        }
        let a = { ...this.props };
        return Object.keys(c.defaultProps).forEach((e) => delete a[e]), s.createElement(n, a, i);
    }
    constructor(e) {
        super(e),
            u(this, '_currentlyTransitioningKeys', void 0),
            u(this, '_keysToEnter', void 0),
            u(this, '_keysToLeave', void 0),
            u(this, '_isMounted', void 0),
            u(this, '_keyChildMapping', {}),
            u(this, 'addChildRef', (e, n) => {
                this._keyChildMapping[e] = n;
            }),
            (this.state = {
                children: (0, l.n)(e.children),
                firstRender: !0
            }),
            (this._currentlyTransitioningKeys = new Set()),
            (this._keysToEnter = []),
            (this._keysToLeave = []),
            (this._isMounted = !1);
    }
}
u(c, 'defaultProps', {
    component: 'span',
    transitionAppear: !0,
    transitionLeave: !0,
    transitionEnter: !0,
    childFactory: null
});
