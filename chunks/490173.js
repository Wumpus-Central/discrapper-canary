r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(990547),
    l = r(442837),
    u = r(481060),
    c = r(239091),
    d = r(40851),
    f = r(213609),
    _ = r(314910),
    h = r(210887),
    p = r(574254),
    m = r(585483),
    g = r(981631);
function E(e, n, r) {
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
function v() {
    window.getSelection().removeAllRanges();
}
let I = (e) => {
    let { children: n, close: r, onUnmount: i, target: l, rect: c, position: h, align: p, impressionName: m, impressionProperties: E, disableClickTrap: I = !1 } = e,
        T = s.useRef(null),
        b = s.useMemo(() => ({ current: l }), [l]),
        y = s.useRef(r);
    s.useEffect(() => {
        y.current = r;
    }),
        s.useEffect(() => {
            var e, n, r;
            let i = null === (e = T.current) || void 0 === e ? void 0 : e.elementRef.current;
            if (null == i) return;
            let a = (e) => {
                var n;
                let r = e.target,
                    i = null === (n = T.current) || void 0 === n ? void 0 : n.elementRef.current;
                if (!(null != i && (0, u.referencePortalAwareContains)(i, r))) v(), y.current();
            };
            return (
                null === (n = i.ownerDocument) || void 0 === n || n.addEventListener('click', a, !0),
                null === (r = i.ownerDocument) || void 0 === r || r.addEventListener('contextmenu', a, !0),
                () => {
                    var e, n;
                    null === (e = i.ownerDocument) || void 0 === e || e.removeEventListener('click', a, !0), null === (n = i.ownerDocument) || void 0 === n || n.removeEventListener('contextmenu', a, !0);
                }
            );
        }, []);
    let S = s.useRef(i);
    s.useEffect(() => void (S.current = i)),
        s.useEffect(
            () => () => {
                var e;
                return null === (e = S.current) || void 0 === e ? void 0 : e.call(S);
            },
            []
        ),
        s.useLayoutEffect(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.updatePosition();
        }),
        (0, f.Z)({
            type: o.ImpressionTypes.MENU,
            name: m,
            properties: E
        });
    let A = (0, d.Aq)(),
        N = s.useCallback(() => {
            A.dispatch(g.CkL.POPOUT_SHOW);
        }, [A]),
        C = s.useCallback(() => {
            A.dispatch(g.CkL.POPOUT_HIDE);
        }, [A]);
    return (0, a.jsx)(_.W5, {
        onMount: N,
        onUnmount: C,
        targetRef: b,
        overrideTargetRect: c,
        position: null != h ? h : 'right',
        align: null != p ? p : 'top',
        autoInvert: !0,
        ref: T,
        nudgeAlignIntoViewport: !0,
        clickTrap: !I,
        children: n
    });
};
class T extends s.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: n } = this.props;
        if ((n.addEventListener('resize', this.closeResize, !0), m.S.subscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e)) {
            let n = setTimeout(() => {
                this.setState({ render: () => (0, a.jsx)(u.MenuSpinner, {}) });
            }, 300);
            e().then((e) => {
                this.setState({ render: e }), clearTimeout(n);
            });
        }
    }
    componentDidUpdate(e) {
        let { isOpen: n } = this.props;
        if (!n && e.isOpen) {
            var r, i;
            null === (i = e.config) || void 0 === i || null === (r = i.onClose) || void 0 === r || r.call(i);
        }
    }
    componentWillUnmount() {
        let { renderWindow: e } = this.props;
        e.removeEventListener('resize', this.closeResize, !0), m.S.unsubscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e, n;
        let { appContext: r, target: i, isOpen: s, theme: o, config: l, rect: u } = this.props,
            c = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
        return s && null != u && null != l && null != i && null != c && l.context === r
            ? (0, a.jsx)(I, {
                  target: i,
                  rect: u,
                  close: this.close,
                  onUnmount: l.onClose,
                  align: l.align,
                  position: l.position,
                  impressionName: l.impressionName,
                  impressionProperties: l.impressionProperties,
                  disableClickTrap: null !== (n = l.disableClickTrap) && void 0 !== n && n,
                  children: (e, n) => {
                      let { position: a } = e;
                      return c({
                          position: a,
                          theme: o,
                          onHeightUpdate: n,
                          config: l,
                          target: i,
                          context: r
                      });
                  }
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', { render: void 0 }),
            E(this, 'closeResize', (e) => {
                let { renderWindow: n } = this.props;
                if (e.target === n) this.close();
            }),
            E(this, 'close', () => {
                let { isOpen: e, closeContextMenu: n } = this.props;
                e && n();
            });
    }
}
function b() {
    let {
            contextMenu: e,
            version: n,
            isOpen: r
        } = (0, l.cj)([p.Z], () => ({
            contextMenu: p.Z.getContextMenu(),
            version: p.Z.version,
            isOpen: p.Z.isOpen()
        })),
        i = (0, l.e7)([h.Z], () => h.Z.theme),
        { appContext: o, renderWindow: u } = s.useContext(d.ZP);
    return (0, a.jsx)(
        T,
        {
            appContext: o,
            renderWindow: u,
            ...e,
            isOpen: r,
            theme: i,
            closeContextMenu: c.Zy
        },
        n
    );
}
