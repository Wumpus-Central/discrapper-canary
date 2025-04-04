n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(990547),
    a = n(442837),
    s = n(481060),
    l = n(239091),
    c = n(40851),
    u = n(213609),
    d = n(314910),
    f = n(210887),
    _ = n(574254),
    p = n(585483),
    h = n(981631);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y() {
    window.getSelection().removeAllRanges();
}
let v = (e) => {
    let { children: t, close: n, onUnmount: a, target: l, rect: f, position: _, align: p, impressionName: m, impressionProperties: g, disableClickTrap: E = !1 } = e,
        b = i.useRef(null),
        v = i.useMemo(() => ({ current: l }), [l]),
        O = i.useRef(n);
    i.useEffect(() => {
        O.current = n;
    }),
        i.useEffect(() => {
            var e, t, n;
            let r = null == (e = b.current) ? void 0 : e.elementRef.current;
            if (null == r) return;
            let i = (e) => {
                var t;
                let n = e.target,
                    r = null == (t = b.current) ? void 0 : t.elementRef.current;
                (null != r && (0, s.ty$)(r, n)) || (y(), O.current());
            };
            return (
                null == (t = r.ownerDocument) || t.addEventListener('click', i, !0),
                null == (n = r.ownerDocument) || n.addEventListener('contextmenu', i, !0),
                () => {
                    var e, t;
                    null == (e = r.ownerDocument) || e.removeEventListener('click', i, !0), null == (t = r.ownerDocument) || t.removeEventListener('contextmenu', i, !0);
                }
            );
        }, []);
    let I = i.useRef(a);
    i.useEffect(() => {
        I.current = a;
    }),
        i.useEffect(
            () => () => {
                var e;
                return null == (e = I.current) ? void 0 : e.call(I);
            },
            []
        ),
        i.useLayoutEffect(() => {
            var e;
            null == (e = b.current) || e.updatePosition();
        }),
        (0, u.Z)({
            type: o.ImpressionTypes.MENU,
            name: m,
            properties: g
        });
    let S = (0, c.Aq)(),
        T = i.useCallback(() => {
            S.dispatch(h.CkL.POPOUT_SHOW);
        }, [S]),
        N = i.useCallback(() => {
            S.dispatch(h.CkL.POPOUT_HIDE);
        }, [S]);
    return (0, r.jsx)(d.W5, {
        onMount: T,
        onUnmount: N,
        targetRef: v,
        overrideTargetRect: f,
        position: null != _ ? _ : 'right',
        align: null != p ? p : 'top',
        autoInvert: !0,
        ref: b,
        nudgeAlignIntoViewport: !0,
        clickTrap: !E,
        children: t
    });
};
class O extends i.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if ((t.addEventListener('resize', this.closeResize, !0), p.S.subscribe(h.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e)) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, r.jsx)(s.TlX, {}) });
            }, 300);
            e().then((e) => {
                this.setState({ render: e }), clearTimeout(t);
            });
        }
    }
    componentDidUpdate(e) {
        let { isOpen: t } = this.props;
        if (!t && e.isOpen) {
            var n, r;
            null == (r = e.config) || null == (n = r.onClose) || n.call(r);
        }
    }
    componentWillUnmount() {
        let { renderWindow: e } = this.props;
        e.removeEventListener('resize', this.closeResize, !0), p.S.unsubscribe(h.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e, t;
        let { appContext: n, target: i, isOpen: o, theme: a, config: s, rect: l } = this.props,
            c = null != (e = this.state.render) ? e : this.props.render;
        return o && null != l && null != s && null != i && null != c && s.context === n
            ? (0, r.jsx)(v, {
                  target: i,
                  rect: l,
                  close: this.close,
                  onUnmount: s.onClose,
                  align: s.align,
                  position: s.position,
                  impressionName: s.impressionName,
                  impressionProperties: s.impressionProperties,
                  disableClickTrap: null != (t = s.disableClickTrap) && t,
                  children: (e, t) => {
                      let { position: r } = e;
                      return c({
                          position: r,
                          theme: a,
                          onHeightUpdate: t,
                          config: s,
                          target: i,
                          context: n
                      });
                  }
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { render: void 0 }),
            m(this, 'closeResize', (e) => {
                let { renderWindow: t } = this.props;
                e.target === t && this.close();
            }),
            m(this, 'close', () => {
                let { isOpen: e, closeContextMenu: t } = this.props;
                e && t();
            });
    }
}
function I() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n
        } = (0, a.cj)([_.Z], () => ({
            contextMenu: _.Z.getContextMenu(),
            version: _.Z.version,
            isOpen: _.Z.isOpen()
        })),
        o = (0, a.e7)([f.Z], () => f.Z.theme),
        { appContext: s, renderWindow: u } = i.useContext(c.ZP);
    return (0, r.jsx)(
        O,
        b(
            g(
                {
                    appContext: s,
                    renderWindow: u
                },
                e
            ),
            {
                isOpen: n,
                theme: o,
                closeContextMenu: l.Zy
            }
        ),
        t
    );
}
