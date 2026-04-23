n.d(t, { h: () => A });
var l = n(627968),
    i = n(64700),
    r = n(777666),
    s = n(661531),
    a = n(778712),
    u = n(97808),
    o = n(571694),
    d = n(954376),
    c = n(503698),
    h = n.n(c),
    g = n(943223);
function m(e) {
    let {
            size: t,
            lowerBadge: n,
            lowerBadgeSize: r = { width: 16, height: 16 },
            children: s,
            className: a,
            innerClassName: u,
            rounded: o = !0,
            "aria-hidden": d,
        } = e,
        c = null != n,
        m = i.useId(),
        E = `${m}-lower_badge_masks`,
        I = `${m}-shape_mask`,
        A = `${m}-stroke_mask`,
        f = r?.width != null ? r.width : 16,
        p = r?.height != null ? r.height : 16,
        S = { width: t + 8, height: t + 8, x: -4, y: -4 },
        N = o
            ? (0, l.jsx)("circle", { id: I, cx: t / 2, cy: t / 2, r: t / 2 })
            : (0, l.jsx)("rect", { id: I, x: 0, y: 0, width: t, height: t, rx: 8, ry: 8 });
    return (0, l.jsxs)(
        "div",
        {
            className: h()(a, g.iE),
            style: { width: t, height: t },
            "aria-hidden": d,
            children: [
                (0, l.jsxs)("svg", {
                    width: S.width,
                    height: S.height,
                    viewBox: `${S.x} ${S.y} ${S.width} ${S.height}`,
                    className: h()(g.JW, g.Pm),
                    overflow: "visible",
                    role: "none",
                    children: [
                        (0, l.jsxs)("defs", {
                            children: [
                                N,
                                c
                                    ? (0, l.jsx)("rect", {
                                          id: E,
                                          x: t - (f + 4) + 2,
                                          y: t - (p + 4) + 2,
                                          width: f + 4,
                                          height: p + 4,
                                          rx: t / 4,
                                          ry: t / 4,
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("mask", {
                            id: m,
                            fill: "black",
                            x: 0,
                            y: 0,
                            width: t,
                            height: t,
                            children: [
                                (0, l.jsx)("use", { href: `#${I}`, fill: "white" }),
                                c ? (0, l.jsx)("use", { href: `#${E}`, fill: "black" }) : null,
                            ],
                        }),
                        c
                            ? (0, l.jsxs)("mask", {
                                  id: A,
                                  children: [
                                      (0, l.jsx)("rect", {
                                          width: "150%",
                                          height: "150%",
                                          x: "-25%",
                                          y: "-25%",
                                          fill: "white",
                                      }),
                                      (0, l.jsx)("use", { href: `#${E}`, fill: "black" }),
                                  ],
                              })
                            : null,
                        (0, l.jsx)("foreignObject", {
                            mask: `url(#${m})`,
                            x: 0,
                            y: 0,
                            className: u,
                            width: t,
                            height: t,
                            children: s,
                        }),
                    ],
                }),
                c ? (0, l.jsx)("div", { className: g.H7, children: n }) : null,
            ],
        },
        m,
    );
}
var E = n(652215),
    I = n(25792);
let A = i.memo(function (e) {
    let {
            channel: t,
            user: n,
            mentionCount: c = 0,
            isMentionLowImportance: h,
            size: g = a._3.SIZE_32,
            status: A,
            isMobile: f,
            isTyping: p = !1,
            "aria-hidden": S = !1,
        } = e,
        N = (0, a.FT)(g),
        x = i.useMemo(
            () =>
                t?.isDM() && null != n
                    ? (0, l.jsx)(u.eu, {
                          src: n.getAvatarURL(t?.getGuildId(), (0, a.FT)(g), !1),
                          size: g,
                          "aria-hidden": S,
                          "aria-label": S ? void 0 : n.username,
                          status: A,
                          isMobile: !(c > 0) && f,
                          isTyping: p,
                      })
                    : t?.isMultiUserDM()
                      ? t?.recipients.length >= 2 && null == t.icon
                          ? (0, l.jsx)(d.A, {
                                "aria-hidden": S,
                                recipients: t.recipients,
                                size: (function (e) {
                                    switch (e) {
                                        case a._3.SIZE_16:
                                        case a._3.SIZE_20:
                                        case a._3.SIZE_24:
                                        case a._3.SIZE_32:
                                            return e;
                                        case a._3.SIZE_40:
                                        case a._3.SIZE_48:
                                            return a._3.SIZE_40;
                                        case a._3.SIZE_56:
                                        case a._3.SIZE_80:
                                        case a._3.SIZE_96:
                                        case a._3.SIZE_120:
                                            return e;
                                        default:
                                            return a._3.SIZE_32;
                                    }
                                })(g),
                                isTyping: p,
                                status: p ? E.clD.ONLINE : null,
                            })
                          : (0, l.jsx)(u.eu, {
                                src: (0, o.Y)(t) ?? void 0,
                                "aria-hidden": S,
                                size: g,
                                status: p ? E.clD.ONLINE : null,
                                isTyping: p,
                            })
                      : (0, l.jsx)(u.eu, { src: void 0, "aria-hidden": S, size: g }),
            [S, t, f, p, c, g, A, n],
        );
    return c <= 0
        ? x
        : (0, l.jsx)(m, {
              size: N,
              rounded: !t?.isMultiUserDM(),
              lowerBadge: (0, l.jsx)(r.hV, {
                  count: c,
                  color: h ? s.A.colors.BACKGROUND_ACCENT.css : s.A.colors.STATUS_DANGER.css,
                  "aria-hidden": !0,
              }),
              lowerBadgeSize: { width: (0, r.o6)(c) },
              children: (0, l.jsx)("div", { className: I.R, children: x }),
          });
});
