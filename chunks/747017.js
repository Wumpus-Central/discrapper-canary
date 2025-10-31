n.d(t, { Z: () => I }), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(106301),
    f = n(741570),
    _ = n(314897),
    p = n(699516),
    h = n(303524),
    m = n(329520),
    g = n(233023),
    E = n(868781),
    b = n(122943),
    y = n(556638),
    O = n(981631),
    v = n(80568);
function I(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: I,
        textClassName: T,
        iconClassName: S,
        textSize: A = "xs",
        animateEmoji: C = !0,
        hasQuest: N = !1,
        hideEmoji: R = !1,
        hideTooltip: P = !1,
    } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let w = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        D = (0, f.E)("ActivityStatus", I),
        x = (0, l.e7)([_.default], () => _.default.getId() === (null == t ? void 0 : t.id)),
        L = (0, l.e7)([d.Z], () =>
            D
                ? x
                    ? d.Z.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === O.IIU.HANG_STATUS)
                      : null
                : null,
        ),
        M = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === O.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ("" === i ? null : i) && null == r.emoji ? null : r;
        }, [n]);
    if ((0, l.e7)([p.Z], () => p.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let j = (null == t ? void 0 : t.bot) === !0,
        k = ((null == M ? void 0 : M.state) != null || null != L) && "xs" === A,
        U = () => {
            if (null != w)
                return (0, r.jsx)(m.Z, {
                    stream: w,
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: "text-".concat(A, "/medium"),
                    textClassName: T,
                    iconClassName: S,
                    hideText: k,
                    hideIcon: j,
                    hideTooltip: P,
                });
            let e =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t !== O.IIU.CUSTOM_STATUS && t !== O.IIU.HANG_STATUS;
                      });
            return null != e
                ? (0, r.jsx)(E.Z, {
                      activity: e,
                      textVariant: "text-".concat(A, "/medium"),
                      textClassName: T,
                      iconClassName: S,
                      hideText: k,
                      hideIcon: j,
                      hideTooltip: P,
                  })
                : null != I
                  ? (0, r.jsx)(b.Z, {
                        channel: I,
                        textVariant: "text-".concat(A, "/medium"),
                        textClassName: T,
                        iconClassName: S,
                        hideText: k,
                        hideTooltip: P,
                    })
                  : null;
        },
        G = o()(v.container, {
            [v.textXs]: "xs" === A,
            [v.textSm]: "sm" === A,
        }),
        B = () =>
            null == M && null == L
                ? null
                : (0, r.jsx)(g.Z, {
                      customStatusActivity: M,
                      textSize: A,
                      animateEmoji: C,
                      hideEmoji: R,
                      hideTooltip: P,
                      textClassName: T,
                      iconClassName: S,
                      tooltipClassName: G,
                      voiceChannel: I,
                      hangStatus: L,
                      userId: null == t ? void 0 : t.id,
                  });
    return (0, r.jsxs)("div", {
        className: G,
        children: [
            U(),
            (0, r.jsx)(s.xvT, {
                variant: "text-".concat(A, "/normal"),
                className: o()(v.truncated, v.dot, T),
                children: y.l,
            }),
            B(),
            N && (0, r.jsx)(h.Z, {}),
        ],
    });
}
