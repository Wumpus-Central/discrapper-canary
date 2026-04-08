"use strict";
n.d(t, { A: () => w, h: () => P });
var l = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(687498),
    o = n(884362),
    d = n(837381),
    c = n(741918),
    u = n(621466),
    m = n(311907),
    h = n(397927),
    x = n(817363),
    g = n(775602),
    f = n(355622),
    _ = n(349688),
    p = n(914905),
    j = n(734057),
    b = n(31717),
    v = n(522602),
    A = n(518960),
    C = n(853742),
    T = n(985018),
    N = n(3246);
let S = { scale: 0.95, opacity: 0 },
    y = { scale: 1, opacity: 1 },
    E = { scale: 1, opacity: 1 },
    I = { tension: 2400, friction: 52 },
    R = `.${N.EJ}`,
    M = { behavior: "smooth", block: "nearest", inline: "nearest" };
function w(e) {
    let { channelId: t, onClick: n, onClose: s, onMouseEnter: r, listItemProps: o } = e,
        d = i.useRef(null),
        c = (0, m.bG)([j.A], () => j.A.getChannel(t), [t]);
    return (
        a()(null != c, "Forum Channel is null"),
        (0, l.jsxs)(h.DUT, {
            ...o,
            "aria-label": T.intl.string(T.t.nzoF5p),
            className: N.EJ,
            onMouseEnter: r,
            onClick: (e) => {
                0 === e.detail && d.current?.activateUploadDialogue(), (0, C.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, l.jsx)(x.A, {
                    className: N.Fg,
                    ref: d,
                    onChange: (e) => {
                        s?.(),
                            (0, A.R)(e.currentTarget.files, c, b.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(h.XGR, { size: "custom", color: "currentColor", width: 28, height: 28, className: N.T3 }),
            ],
        })
    );
}
function k(e) {
    let { channelId: t, closePopout: n } = e,
        [s, a] = i.useState(!1),
        { reducedMotion: u } = i.useContext(h.CZY),
        x = (0, h.zhh)({ from: u.enabled ? y : S, to: E, config: I }, "animate-always"),
        j = (0, m.bG)([g.A], () => g.A.keyboardModeEnabled),
        b = (0, m.bG)([v.A], () => v.A.getUploads(t, f.oU.CREATE_FORUM_POST.drafts.type)),
        A = (0, o.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: j,
            orientation: c.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsx)(r.animated.div, {
        className: N.jC,
        onMouseLeave: () => {
            s || j || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(M);
        },
        style: x,
        children: (0, l.jsx)(h.IpV, {
            orientation: "horizontal",
            className: N.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, l.jsx)(d.hD, {
                navigator: A,
                children: (0, l.jsx)(d.PR, {
                    children: (e) => {
                        let { ref: n, ...i } = e;
                        return (0, l.jsxs)("div", {
                            className: N.p8,
                            ref: n,
                            ...i,
                            children: [
                                b.map((e) =>
                                    (0, l.jsx)(
                                        p.A,
                                        {
                                            channelId: t,
                                            draftType: f.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: j,
                                            hideFileName: !0,
                                            size: _.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, l.jsx)(L, { channelId: t, setFileInputOpen: a }),
                            ],
                        });
                    },
                }),
            }),
        }),
    });
}
function L(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        i = { ...(0, d.rm)("upload-button"), tabIndex: 0 };
    return (0, l.jsx)(w, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, u.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(M);
                });
        },
        listItemProps: i,
    });
}
function P(e) {
    let { channelId: t } = e,
        [n, s] = i.useState(!1),
        a = i.useRef(null),
        r = (0, m.bG)([v.A], () => v.A.getUploads(t, f.oU.CREATE_FORUM_POST.drafts.type)),
        o = r.length,
        d = o > 0;
    i.useEffect(() => {
        n && !d && s(!1);
    }, [n, d]),
        i.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            s(o > 0);
            let e = requestAnimationFrame(() => {
                let e = a.current?.querySelector(R);
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
        className: N.kL,
        ref: a,
        onBlur: (e) => {
            null == e.relatedTarget ||
                a.current?.contains(e.relatedTarget) ||
                (e.relatedTarget?.closest('[role="dialog"]') == null && u());
        },
        children: [
            d
                ? !n &&
                  (0, l.jsxs)(h.DUT, {
                      "aria-label": T.intl.string(T.t.nzoF5p),
                      className: N.fY,
                      tabIndex: 0,
                      onClick: c,
                      onFocus: () => {
                          c(),
                              d &&
                                  requestAnimationFrame(() => {
                                      let e = a.current?.querySelector(R);
                                      e?.focus();
                                  });
                      },
                      onMouseEnter: c,
                      children: [
                          (0, l.jsx)(p.J, { upload: r[0], size: _.L.SMALL }),
                          (0, l.jsx)("div", { className: N.qS, children: o }),
                      ],
                  })
                : (0, l.jsx)(w, { onMouseEnter: c, channelId: t }),
            n && (0, l.jsx)(k, { channelId: t, closePopout: u }),
        ],
    });
}
