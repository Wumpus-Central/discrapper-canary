n.d(t, { W: () => _ }), n(653041), n(47120);
var r,
    i = n(192379),
    o = n(830483);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function u(e, t) {
    if ('object' !== f(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== f(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
function d(e) {
    var t = u(e, 'string');
    return 'symbol' === f(t) ? t : String(t);
}
function f(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
class _ extends (r = i.Component) {
    static getDerivedStateFromProps(e, t) {
        let { children: n, firstRender: r } = t,
            i = (0, o.n)(e.children);
        return {
            children: r ? i : (0, o.B)(n, i),
            firstRender: !1
        };
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
        if (e !== this.props) {
            let e = (0, o.n)(this.props.children),
                n = t.children;
            if ((this.props.transitionEnter ? this._enqueueTransitions(e, n, this._keysToEnter) : this._keysToEnter.length && (this._keysToEnter = []), this.props.transitionLeave)) this._enqueueTransitions(n, e, this._keysToLeave);
            else {
                let t = [];
                this._enqueueTransitions(n, e, t);
                let r = (0, o.B)(n, e);
                for (let e = 0, n = t.length; e < n; e++) delete r[t[e]];
                this._isMounted && this.setState({ children: r }), this._keysToLeave.length && (this._keysToLeave = []);
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
            o = this._keyChildMapping[e];
        null != o && null != o[t] ? o[t](i) : i();
    }
    _handleDonePerform(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = this._keyChildMapping[e];
        null != r && null != r[t] && r[t](), this._currentlyTransitioningKeys.delete(e);
        let i = (0, o.n)(this.props.children);
        n
            ? null != i && i.hasOwnProperty(e)
                ? this.performEnter(e)
                : this.setState((t) => {
                      let { children: n } = t,
                          { [e]: r } = n;
                      return { children: l(n, [e].map(d)) };
                  })
            : (null != i && i.hasOwnProperty(e)) || this.performLeave(e);
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
        let { childFactory: e, component: t } = this.props,
            { children: n } = this.state,
            r = [];
        for (let t in n) {
            let o = n[t];
            null != o &&
                i.isValidElement(o) &&
                r.push(
                    i.cloneElement(null == e ? o : e(o), {
                        ref: (e) => this.addChildRef(t, e),
                        key: t
                    })
                );
        }
        let o = s({}, this.props);
        return Object.keys(_.defaultProps).forEach((e) => delete o[e]), i.createElement(t, o, r);
    }
    constructor(e) {
        super(e),
            a(this, '_currentlyTransitioningKeys', void 0),
            a(this, '_keysToEnter', void 0),
            a(this, '_keysToLeave', void 0),
            a(this, '_isMounted', void 0),
            a(this, '_keyChildMapping', {}),
            a(this, 'addChildRef', (e, t) => {
                this._keyChildMapping[e] = t;
            }),
            (this.state = {
                children: (0, o.n)(e.children),
                firstRender: !0
            }),
            (this._currentlyTransitioningKeys = new Set()),
            (this._keysToEnter = []),
            (this._keysToLeave = []),
            (this._isMounted = !1);
    }
}
a(_, 'defaultProps', {
    component: 'span',
    transitionAppear: !0,
    transitionLeave: !0,
    transitionEnter: !0,
    childFactory: null
});
