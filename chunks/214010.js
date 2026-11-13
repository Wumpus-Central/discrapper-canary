i.r(t);
var n = i(477900),
    r = i(582128),
    s = i(554146),
    o = i(43105),
    a = i(462887),
    u = i(736653),
    l = i(975807),
    c = i(263775),
    d = i(687938),
    p = i(206092),
    g = i(652215),
    A = i(49999),
    b = i(263419),
    m = i(792996),
    C = i(927727),
    E = i(731556);
i.d(
    t,
    {},
    {
        default: function (e) {
            let { targetElementRef: t } = e,
                i = (0, u.Ay)(),
                [_, M] = r.useState(!1),
                [S, f] = r.useState(!1),
                { showCoachmark: h } = p.A.useConfig({ location: "MetaQuestAppCoachmark" }),
                v = h && (0, d.H)(),
                [y, k] = (0, c.kn)(v && S ? [s.M.META_QUEST_APP_UPSELL_COACHMARK] : [], {
                    groupName: A.m.MAIN_VIEW_TOOLTIPS,
                    bypassAutoDismiss: !0,
                    deduplicateImpressions: !0,
                }),
                w = y === s.M.META_QUEST_APP_UPSELL_COACHMARK,
                T = r.useCallback(() => {
                    ((0, l.A)(g.AMi.META_QUEST), k(A.i.TAKE_ACTION));
                }, [k]),
                I = r.useCallback(
                    (e) => {
                        ("user:explicit" === e || "user:escape" === e) && k(A.i.USER_DISMISS);
                    },
                    [k],
                );
            return (r.useLayoutEffect(() => {
                let e, i;
                if (!v) return;
                let n = t.current;
                if (null == n) return;
                let r = () => {
                    M(n.getBoundingClientRect().bottom > window.innerHeight / 2);
                };
                (r(), window.addEventListener("resize", r));
                let s = () => {
                        let t,
                            r = Number.isFinite(
                                (t = Number.parseFloat(
                                    getComputedStyle(document.body).getPropertyValue("--custom-app-panels-height"),
                                )),
                            )
                                ? t
                                : 0;
                        if (r === i) return;
                        ((i = r), f(!1), e?.disconnect());
                        let s = new IntersectionObserver(
                            (t) => {
                                let [i] = t;
                                e === s && f(i.isIntersecting);
                            },
                            { rootMargin: `0px 0px -${r}px 0px` },
                        );
                        (e = s).observe(n);
                    },
                    o = new MutationObserver(s);
                return (
                    o.observe(document.body, { attributes: !0, attributeFilter: ["style"] }),
                    s(),
                    () => {
                        (window.removeEventListener("resize", r), o.disconnect(), e?.disconnect(), (e = void 0));
                    }
                );
            }, [v, t]),
            w && S)
                ? (0, n.jsx)(o.A, {
                      targetElementRef: t,
                      position: "right",
                      ...(_ ? { alignmentStrategy: "edge", align: "bottom", caretConfig: { align: "end" } } : {}),
                      graphic: { type: "image", src: (0, a.M)(i) ? C : E },
                      title: m.intl.string(b.default.zrko2m),
                      body: m.intl.string(b.default["2dsPje"]),
                      actions: [{ text: m.intl.string(b.default.QvXYv2), onClick: T }],
                      onRequestClose: I,
                  })
                : null;
        },
    },
);
