r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(990547),
    l = r(442837),
    u = r(481060),
    c = r(239091),
    d = r(40851),
    f = r(213609),
    p = r(314910),
    h = r(210887),
    _ = r(574254),
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
let y = (e) => {
    let { children: n, close: r, onUnmount: i, target: l, rect: c, position: h, align: _, impressionName: m, impressionProperties: E, disableClickTrap: y = !1 } = e,
        b = o.useRef(null),
        I = o.useMemo(() => ({ current: l }), [l]),
        T = o.useRef(r);
    o.useEffect(() => {
        T.current = r;
    }),
        o.useEffect(() => {
            var e, n, r;
            let i = null === (e = b.current) || void 0 === e ? void 0 : e.elementRef.current;
            if (null == i) return;
            let a = (e) => {
                var n;
                let r = e.target,
                    i = null === (n = b.current) || void 0 === n ? void 0 : n.elementRef.current;
                if (!(null != i && (0, u.referencePortalAwareContains)(i, r))) v(), T.current();
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
    let S = o.useRef(i);
    o.useEffect(() => void (S.current = i)),
        o.useEffect(
            () => () => {
                var e;
                return null === (e = S.current) || void 0 === e ? void 0 : e.call(S);
            },
            []
        ),
        o.useLayoutEffect(() => {
            var e;
            null === (e = b.current) || void 0 === e || e.updatePosition();
        }),
        (0, f.Z)({
            type: s.ImpressionTypes.MENU,
            name: m,
            properties: E
        });
    let A = (0, d.Aq)(),
        C = o.useCallback(() => {
            A.dispatch(g.CkL.POPOUT_SHOW);
        }, [A]),
        N = o.useCallback(() => {
            A.dispatch(g.CkL.POPOUT_HIDE);
        }, [A]);
    return (0, a.jsx)(p.W5, {
        onMount: C,
        onUnmount: N,
        targetRef: I,
        overrideTargetRect: c,
        position: null != h ? h : 'right',
        align: null != _ ? _ : 'top',
        autoInvert: !0,
        ref: b,
        nudgeAlignIntoViewport: !0,
        clickTrap: !y,
        children: n
    });
};
class b extends o.PureComponent {
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
        let { appContext: r, target: i, isOpen: o, theme: s, config: l, rect: u } = this.props,
            c = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
        return o && null != u && null != l && null != i && null != c && l.context === r
            ? (0, a.jsx)(y, {
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
                          theme: s,
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
function I() {
    let {
            contextMenu: e,
            version: n,
            isOpen: r
        } = (0, l.cj)([_.Z], () => ({
            contextMenu: _.Z.getContextMenu(),
            version: _.Z.version,
            isOpen: _.Z.isOpen()
        })),
        i = (0, l.e7)([h.Z], () => h.Z.theme),
        { appContext: s, renderWindow: u } = o.useContext(d.ZP);
    return (0, a.jsx)(
        b,
        {
            appContext: s,
            renderWindow: u,
            ...e,
            isOpen: r,
            theme: i,
            closeContextMenu: c.Zy
        },
        n
    );
}
