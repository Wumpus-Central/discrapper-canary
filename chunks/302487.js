"use strict";
n.d(t, { A: () => P, h: () => U });
var l = n(627968),
    a = n(64700),
    s = n(284009),
    i = n.n(s),
    r = n(419354),
    o = n(884362),
    d = n(837381),
    c = n(741918),
    u = n(621466),
    m = n(311907),
    h = n(939249),
    g = n(750943),
    x = n(844222),
    f = n(717421),
    _ = n(573613),
    p = n(817363),
    j = n(775602),
    b = n(355622),
    v = n(349688),
    C = n(914905),
    A = n(734057),
    N = n(31717),
    S = n(522602),
    E = n(518960),
    T = n(853742),
    y = n(985018),
    I = n(811998);
let w = { scale: 0.95, opacity: 0 },
    R = { scale: 1, opacity: 1 },
    k = { scale: 1, opacity: 1 },
    M = { tension: 2400, friction: 52 },
    L = `.${I.EJ}`,
    D = { behavior: "smooth", block: "nearest", inline: "nearest" };
function P(e) {
    let { channelId: t, onClick: n, onClose: s, onMouseEnter: r, listItemProps: o } = e,
        d = a.useRef(null),
        c = (0, m.bG)([A.A], () => A.A.getChannel(t), [t]);
    return (
        i()(null != c, "Forum Channel is null"),
        (0, l.jsxs)(h.D, {
            ...o,
            "aria-label": y.intl.string(y.t.nzoF5p),
            className: I.EJ,
            onMouseEnter: r,
            onClick: (e) => {
                0 === e.detail && d.current?.activateUploadDialogue(), (0, T.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, l.jsx)(p.A, {
                    className: I.Fg,
                    ref: d,
                    onChange: (e) => {
                        s?.(),
                            (0, E.R)(e.currentTarget.files, c, N.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(g.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: I.T3 }),
            ],
        })
    );
}
function O(e) {
    let { channelId: t, closePopout: n } = e,
        [s, i] = a.useState(!1),
        { reducedMotion: u } = a.useContext(x.C),
        h = (0, f.z)({ from: u.enabled ? R : w, to: k, config: M }, "animate-always"),
        g = (0, m.bG)([j.A], () => j.A.keyboardModeEnabled),
        p = (0, m.bG)([S.A], () => S.A.getUploads(t, b.oU.CREATE_FORUM_POST.drafts.type)),
        A = (0, o.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: g,
            orientation: c.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsx)(r.animated.div, {
        className: I.jC,
        onMouseLeave: () => {
            s || g || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(D);
        },
        style: h,
        children: (0, l.jsx)(_.Ip, {
            orientation: "horizontal",
            className: I.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, l.jsx)(d.hD, {
                navigator: A,
                children: (0, l.jsx)(d.PR, {
                    children: (e) => {
                        let { ref: n, ...a } = e;
                        return (0, l.jsxs)("div", {
                            className: I.p8,
                            ref: n,
                            ...a,
                            children: [
                                p.map((e) =>
                                    (0, l.jsx)(
                                        C.A,
                                        {
                                            channelId: t,
                                            draftType: b.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: g,
                                            hideFileName: !0,
                                            size: v.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, l.jsx)(F, { channelId: t, setFileInputOpen: i }),
                            ],
                        });
                    },
                }),
            }),
        }),
    });
}
function F(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        a = { ...(0, d.rm)("upload-button"), tabIndex: 0 };
    return (0, l.jsx)(P, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, u.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(D);
                });
        },
        listItemProps: a,
    });
}
function U(e) {
    let { channelId: t } = e,
        [n, s] = a.useState(!1),
        i = a.useRef(null),
        r = (0, m.bG)([S.A], () => S.A.getUploads(t, b.oU.CREATE_FORUM_POST.drafts.type)),
        o = r.length,
        d = o > 0;
    a.useEffect(() => {
        n && !d && s(!1);
    }, [n, d]),
        a.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            s(o > 0);
            let e = requestAnimationFrame(() => {
                let e = i.current?.querySelector(L);
                e?.focus();
            });
            return () => cancelAnimationFrame(e);
        }, [o]);
    let c = () => {
            d && s(!0);
        },
        u = () => {
            s(!1);
        };
    return (0, l.jsxs)("div", {
        className: I.kL,
        ref: i,
        onBlur: (e) => {
            null == e.relatedTarget ||
                i.current?.contains(e.relatedTarget) ||
                (e.relatedTarget?.closest('[role="dialog"]') == null && u());
        },
        children: [
            d
                ? !n &&
                  (0, l.jsxs)(h.D, {
                      "aria-label": y.intl.string(y.t.nzoF5p),
                      className: I.fY,
                      tabIndex: 0,
                      onClick: c,
                      onFocus: () => {
                          c(),
                              d &&
                                  requestAnimationFrame(() => {
                                      let e = i.current?.querySelector(L);
                                      e?.focus();
                                  });
                      },
                      onMouseEnter: c,
                      children: [
                          (0, l.jsx)(C.J, { upload: r[0], size: v.L.SMALL }),
                          (0, l.jsx)("div", { className: I.qS, children: o }),
                      ],
                  })
                : (0, l.jsx)(P, { onMouseEnter: c, channelId: t }),
            n && (0, l.jsx)(O, { channelId: t, closePopout: u }),
        ],
    });
}
