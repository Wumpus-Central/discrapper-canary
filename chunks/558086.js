n.d(t, { A: () => L, Y: () => x });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(621466),
    d = n(17928),
    c = n(939249),
    h = n(186111),
    f = n(531685),
    g = n(43105),
    A = n(174459),
    p = n(652215),
    m = n(105292);
function I(e) {
    let {
            tutorialId: t,
            targetElementRef: n,
            position: r,
            graphicSrc: s,
            title: a,
            body: o,
            onClose: u,
            onComplete: d,
        } = e,
        c = l.useRef(!1);
    l.useEffect(
        () => (
            A.default.track(p.HAw.SHOW_TUTORIAL, { tutorial: t }),
            () => {
                A.default.track(p.HAw.CLOSE_TUTORIAL, { tutorial: t, acknowledged: c.current });
            }
        ),
        [t],
    );
    let h = l.useCallback(() => {
        ((c.current = !0), u(), d());
    }, [u, d]);
    return (0, i.jsx)(g.A, {
        targetElementRef: n,
        shouldShow: !0,
        position: r,
        graphic: { type: "image", src: s },
        title: a,
        body: o,
        actions: [{ text: m.intl.string(m.t["+IrDzN"]), variant: "primary", onClick: h }],
        onRequestClose: u,
    });
}
function E(e) {
    let { children: t, ...n } = e,
        [r, s] = l.useState(!1),
        a = l.useCallback(() => s((e) => !e), []),
        o = l.useCallback(() => s(!1), []);
    return (0, i.jsxs)(i.Fragment, {
        children: [t({ onClick: a, "aria-expanded": r }, r), r && (0, i.jsx)(I, { ...n, onClose: o })],
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
var T = n(241541),
    N = n(851230);
function v() {
    return (0, i.jsx)(i.Fragment, {
        children: m.intl.format(m.t.ymkBti, {
            shareIcon: m.intl.string(m.t.VINpSK),
            shareIconHook: () => (0, i.jsx)(T.D, { className: N.Kk }, "icon"),
        }),
    });
}
var y = n(79858),
    M = n(71393),
    D = n(967198),
    R = n(303634);
let O = {
    "voice-conversations": function (e) {
        return (0, i.jsx)(E, {
            ...e,
            graphicSrc:
                "https://cdn.discordapp.com/assets/content/2fbf80a634ec810152549bc64cc498329014001bf81341a6fd08ca73f0370316.svg",
            title: m.intl.string(m.t.w5HAll),
            body: m.intl.string(m.t.Ww4hhq),
        });
    },
    "writing-messages": function (e) {
        let t = (0, d.bG)([M.A, D.A], () => M.A.getGuild(D.A.getGuildId()))?.name;
        return (0, i.jsx)(E, {
            ...e,
            graphicSrc:
                "https://cdn.discordapp.com/assets/content/bdb4aa801d39492170cf3db05e482b46af127a4a87ba006b661eb376daeaee04.svg",
            title: m.intl.string(m.t.nkP0ly),
            body: [m.intl.format(m.t.oQuG3K, { serverName: t })],
        });
    },
    "organize-by-topic": function (e) {
        return (0, i.jsx)(E, {
            ...e,
            graphicSrc:
                "https://cdn.discordapp.com/assets/content/5d2fe3296aafdf78f5a3c44a803c714f1c90e3b0d6d1c7290aa5fdf2e79831e3.svg",
            title: m.intl.string(m.t["j/5+IX"]),
            body: m.intl.string(m.t.mufH2P),
        });
    },
};
class x extends l.PureComponent {
    state = { offsetX: null, offsetY: null };
    contentRef = l.createRef();
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: l,
            targetHeight: r,
            position: s,
            offset: a,
        } = e;
        (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== i ||
            this.props.targetWidth !== l ||
            this.props.targetHeight !== r ||
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
                    WHOS_ONLINE: { title: m.intl.string(m.t.l2nSoI), body: m.intl.format(m.t.y6tbBB, {}) },
                    INSTANT_INVITE: { title: m.intl.string(m.t.XcehY3), body: (0, i.jsx)(v, {}) },
                    SERVER_SETTINGS: { title: m.intl.string(m.t.wc8wi5), body: m.intl.format(m.t.mIfDhc, {}) },
                    DIRECT_MESSAGES: { title: m.intl.string(m.t.V07x5y), body: m.intl.format(m.t.GEBBey, {}) },
                    CREATE_MORE_SERVERS: { title: m.intl.string(m.t["50FORo"]), body: m.intl.format(m.t.zVL4qa, {}) },
                    CREATE_FIRST_SERVER: { title: m.intl.string(m.t.CtOX9T), body: m.intl.format(m.t.TflqTe, {}) },
                    FRIENDS_LIST: { title: m.intl.string(m.t.Fnk9L4), body: m.intl.format(m.t.NTq0AZ, {}) },
                }[t.replace(/-/g, "_").toUpperCase()] ?? {}).title,
            body: e.body,
            isLongText: e.isLongText ?? !1,
        };
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: l } = this.props,
            r = e in _ ? _[e] : null;
        if (null == r) return null;
        let {
                media: a,
                textAlign: o,
                isLongText: u,
                highPriority: d,
                spacing: h,
                arrowAlignment: f = C.oN.TOP,
                popoutPosition: g,
            } = r,
            { offsetX: A, offsetY: p } = this.state,
            I = { left: null != A ? l.x + A : void 0, top: null != p ? l.y + p : void 0 };
        function E(e) {
            let t = n && !e;
            return { [R.bW]: t, [R.EO]: !t, [R.TX]: d };
        }
        let S = (e, t) => {
                let l;
                return (0, i.jsx)(c.D, {
                    ...e,
                    "aria-label": m.intl.string(m.t.IyCzIF),
                    className: R.q3,
                    style: I,
                    innerRef: this.contentRef,
                    children: (0, i.jsxs)("div", {
                        className: s()(R.Mp, E(t)),
                        children: [
                            ((l = n && !t),
                            !0 !== d
                                ? null
                                : (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)("div", { className: s()(R.Mn, { [R.bW]: l, [R.EO]: !l }) }),
                                          (0, i.jsx)("div", { className: s()(R.sQ, { [R.bW]: l, [R.EO]: !l }) }),
                                      ],
                                  })),
                            (0, i.jsx)("div", { className: s()(R.r6, E(t)) }),
                            (0, i.jsx)("div", { className: s()(R.CY, E(t)) }),
                        ],
                    }),
                });
            },
            T = O[e];
        if (null != T)
            return (0, i.jsx)(T, {
                tutorialId: e,
                targetElementRef: this.contentRef,
                position: g,
                onComplete: this.handleDismiss,
                children: S,
            });
        let N = this.getTutorialPopoutText();
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
            ...N,
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
                  shouldShowAny: l,
              } = (0, d.cf)([y.A, f.A, h.A], () => ({
                  indicators: y.A.getIndicators(),
                  tutorialData: y.A.getData(),
                  shouldShowAny: y.A.shouldShowAnyIndicators() && !h.A.hasLayers(),
                  windowFocused: f.A.isFocused(),
              }));
              return l
                  ? (0, i.jsx)(i.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [l, r] = e,
                                s = t[l];
                            return (
                                o()(null != s, `Missing tutorial definition for ${l}`),
                                (0, i.jsx)(x, { tutorialId: l, tutorialDefinition: s, focused: n, ...r }, l)
                            );
                        }),
                    })
                  : null;
          }
        : null;
