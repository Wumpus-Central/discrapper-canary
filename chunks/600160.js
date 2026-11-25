n.d(t, { Y: () => x, A: () => L });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    u = n(621466),
    d = n(855986),
    c = n(939249),
    h = n(186111),
    f = n(531685),
    g = n(43105),
    A = n(129230),
    p = n(652215),
    I = n(792996);
function m(e) {
    let {
            tutorialId: t,
            targetElementRef: n,
            position: l,
            graphicSrc: s,
            title: a,
            body: o,
            onClose: u,
            onComplete: d,
        } = e,
        c = r.useRef(!1);
    r.useEffect(
        () => (
            A.default.track(p.HAw.SHOW_TUTORIAL, { tutorial: t }),
            () => {
                A.default.track(p.HAw.CLOSE_TUTORIAL, { tutorial: t, acknowledged: c.current });
            }
        ),
        [t],
    );
    let h = r.useCallback(() => {
        ((c.current = !0), u(), d());
    }, [u, d]);
    return (0, i.jsx)(g.A, {
        targetElementRef: n,
        shouldShow: !0,
        position: l,
        graphic: { type: "image", src: s },
        title: a,
        body: o,
        actions: [{ text: I.intl.string(I.t["+IrDzN"]), variant: "primary", onClick: h }],
        onRequestClose: u,
    });
}
function E(e) {
    let { children: t, ...n } = e,
        [l, s] = r.useState(!1),
        a = r.useCallback(() => s((e) => !e), []),
        o = r.useCallback(() => s(!1), []);
    return (0, i.jsxs)(i.Fragment, {
        children: [t({ onClick: a, "aria-expanded": l }, l), l && (0, i.jsx)(m, { ...n, onClose: o })],
    });
}
var S = n(787541),
    C = n(244083);
let _ = Object.freeze({
    "voice-conversations": { popoutPosition: "right", highPriority: !0 },
    "writing-messages": { popoutPosition: "top", highPriority: !0 },
    "direct-messages": { popoutPosition: "right" },
    "create-first-server": { popoutPosition: "right", highPriority: !0 },
    "organize-by-topic": { popoutPosition: "right" },
    "instant-invite": { popoutPosition: "right", spacing: 24, highPriority: !0 },
    "whos-online": { spacing: 16, popoutPosition: "left" },
    "server-settings": { popoutPosition: "bottom", spacing: 10 },
    "friends-list": { spacing: 8, popoutPosition: "right" },
    "create-more-servers": { spacing: 8, popoutPosition: "right" },
});
var N = n(241541),
    T = n(851230);
function y() {
    return (0, i.jsx)(i.Fragment, {
        children: I.intl.format(I.t.ymkBti, {
            shareIcon: I.intl.string(I.t.VINpSK),
            shareIconHook: () => (0, i.jsx)(N.GroupPlusIcon, { className: T.Kk }, "icon"),
        }),
    });
}
var v = n(179913),
    M = n(71393),
    R = n(967198),
    D = n(303634);
let O = {
    "voice-conversations": function (e) {
        return (0, i.jsx)(E, {
            ...e,
            graphicSrc:
                "https://cdn.discordapp.com/assets/content/2fbf80a634ec810152549bc64cc498329014001bf81341a6fd08ca73f0370316.svg",
            title: I.intl.string(I.t.w5HAll),
            body: I.intl.string(I.t.Ww4hhq),
        });
    },
    "writing-messages": function (e) {
        let t = (0, d.bG)([M.A, R.A], () => M.A.getGuild(R.A.getGuildId()))?.name;
        return (0, i.jsx)(E, {
            ...e,
            graphicSrc:
                "https://cdn.discordapp.com/assets/content/bdb4aa801d39492170cf3db05e482b46af127a4a87ba006b661eb376daeaee04.svg",
            title: I.intl.string(I.t.nkP0ly),
            body: [I.intl.format(I.t.oQuG3K, { serverName: t })],
        });
    },
    "organize-by-topic": function (e) {
        return (0, i.jsx)(E, {
            ...e,
            graphicSrc:
                "https://cdn.discordapp.com/assets/content/5d2fe3296aafdf78f5a3c44a803c714f1c90e3b0d6d1c7290aa5fdf2e79831e3.svg",
            title: I.intl.string(I.t["j/5+IX"]),
            body: I.intl.string(I.t.mufH2P),
        });
    },
};
class x extends r.PureComponent {
    state = { offsetX: null, offsetY: null };
    contentRef = r.createRef();
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: r,
            targetHeight: l,
            position: s,
            offset: a,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== i ||
            this.props.targetWidth !== r ||
            this.props.targetHeight !== l ||
            this.props.position !== s ||
            this.props.offset.x !== a.x ||
            this.props.offset.y !== a.y) &&
            this.updateCache();
    }
    updateCache() {
        let e = this.contentRef.current;
        if (null == e || !(0, u.vq)(e, HTMLElement)) return;
        let { offsetWidth: t, offsetHeight: n } = e,
            i = { offsetX: (this.props.targetWidth - t) / 2, offsetY: (this.props.targetHeight - n) / 2 };
        switch (this.props.position) {
            case "left":
                i.offsetX = -t;
                break;
            case "right":
                i.offsetX = this.props.targetWidth;
                break;
            case "bottom":
                i.offsetY = this.props.targetHeight;
                break;
            default:
                i.offsetY = -n;
        }
        ((i.offsetX += this.props.offset.x ?? 0), (i.offsetY += this.props.offset.y ?? 0), this.setState(i));
    }
    handleSkipTips() {
        S.n7();
    }
    handleDismiss = () => {
        S.X8(this.props.tutorialId);
    };
    getTutorialPopoutText() {
        let e,
            { tutorialId: t } = this.props;
        return {
            title: (e =
                {
                    WHOS_ONLINE: { title: I.intl.string(I.t.l2nSoI), body: I.intl.format(I.t.y6tbBB, {}) },
                    INSTANT_INVITE: { title: I.intl.string(I.t.XcehY3), body: (0, i.jsx)(y, {}) },
                    SERVER_SETTINGS: { title: I.intl.string(I.t.wc8wi5), body: I.intl.format(I.t.mIfDhc, {}) },
                    DIRECT_MESSAGES: { title: I.intl.string(I.t.V07x5y), body: I.intl.format(I.t.GEBBey, {}) },
                    CREATE_MORE_SERVERS: { title: I.intl.string(I.t["50FORo"]), body: I.intl.format(I.t.zVL4qa, {}) },
                    CREATE_FIRST_SERVER: { title: I.intl.string(I.t.CtOX9T), body: I.intl.format(I.t.TflqTe, {}) },
                    FRIENDS_LIST: { title: I.intl.string(I.t.Fnk9L4), body: I.intl.format(I.t.NTq0AZ, {}) },
                }[t.replace(/-/g, "_").toUpperCase()] ?? {}).title,
            body: e.body,
            isLongText: e.isLongText ?? !1,
        };
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: r } = this.props,
            l = e in _ ? _[e] : null;
        if (null == l) return null;
        let {
                media: a,
                textAlign: o,
                isLongText: u,
                highPriority: d,
                spacing: h,
                arrowAlignment: f = C.oN.TOP,
                popoutPosition: g,
            } = l,
            { offsetX: A, offsetY: p } = this.state,
            m = { left: null != A ? r.x + A : void 0, top: null != p ? r.y + p : void 0 };
        function E(e) {
            let t = n && !e;
            return { [D.bW]: t, [D.EO]: !t, [D.TX]: d };
        }
        let S = (e, t) => {
                let r;
                return (0, i.jsx)(c.D, {
                    ...e,
                    "aria-label": I.intl.string(I.t.IyCzIF),
                    className: D.q3,
                    style: m,
                    innerRef: this.contentRef,
                    children: (0, i.jsxs)("div", {
                        className: s()(D.Mp, E(t)),
                        children: [
                            ((r = n && !t),
                            !0 !== d
                                ? null
                                : (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)("div", { className: s()(D.Mn, { [D.bW]: r, [D.EO]: !r }) }),
                                          (0, i.jsx)("div", { className: s()(D.sQ, { [D.bW]: r, [D.EO]: !r }) }),
                                      ],
                                  })),
                            (0, i.jsx)("div", { className: s()(D.r6, E(t)) }),
                            (0, i.jsx)("div", { className: s()(D.CY, E(t)) }),
                        ],
                    }),
                });
            },
            N = O[e];
        if (null != N)
            return (0, i.jsx)(N, {
                tutorialId: e,
                targetElementRef: this.contentRef,
                position: g,
                onComplete: this.handleDismiss,
                children: S,
            });
        let T = this.getTutorialPopoutText();
        return (0, i.jsx)(C.Ay, {
            innerRef: this.contentRef,
            position: g,
            renderMedia: a,
            textAlign: o,
            spacing: h,
            isLongText: u,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: f,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...T,
            children: (e, t) => {
                let { isShown: n } = t;
                return S(e, n);
            },
        });
    }
}
let L =
    221552 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: r,
              } = (0, d.cf)([v.A, f.A, h.A], () => ({
                  indicators: v.A.getIndicators(),
                  tutorialData: v.A.getData(),
                  shouldShowAny: v.A.shouldShowAnyIndicators() && !h.A.hasLayers(),
                  windowFocused: f.A.isFocused(),
              }));
              return r
                  ? (0, i.jsx)(i.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [r, l] = e,
                                s = t[r];
                            return (
                                o()(null != s, `Missing tutorial definition for ${r}`),
                                (0, i.jsx)(x, { tutorialId: r, tutorialDefinition: s, focused: n, ...l }, r)
                            );
                        }),
                    })
                  : null;
          }
        : null;
