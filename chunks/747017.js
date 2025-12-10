n.d(t, { Z: () => S }), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(106301),
    f = n(741570),
    p = n(314897),
    _ = n(699516),
    m = n(303524),
    h = n(329520),
    g = n(233023),
    E = n(868781),
    b = n(122943),
    y = n(556638),
    O = n(981631),
    v = n(80568);
function S(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: S,
        textClassName: I,
        iconClassName: T,
        textSize: C = "xs",
        animateEmoji: A = !0,
        hasQuest: N = !1,
        hideEmoji: P = !1,
        hideTooltip: R = !1,
    } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let D = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        w = (0, f.E)("ActivityStatus", S),
        x = (0, l.e7)([p.default], () => p.default.getId() === (null == t ? void 0 : t.id)),
        L = (0, l.e7)([d.Z], () =>
            w
                ? x
                    ? d.Z.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === O.IIU.HANG_STATUS)
                      : null
                : null,
        ),
        j = i.useMemo(() => {
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
    if ((0, l.e7)([_.Z], () => _.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let M = (null == t ? void 0 : t.bot) === !0,
        k = ((null == j ? void 0 : j.state) != null || null != L) && "xs" === C,
        U = () => {
            if (null != D)
                return (0, r.jsx)(h.Z, {
                    stream: D,
                    game: null == n ? void 0 : n.find(c.Z),
                    textVariant: "text-".concat(C, "/medium"),
                    textClassName: I,
                    iconClassName: T,
                    hideText: k,
                    hideIcon: M,
                    hideTooltip: R,
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
                      textVariant: "text-".concat(C, "/medium"),
                      textClassName: I,
                      iconClassName: T,
                      hideText: k,
                      hideIcon: M,
                      hideTooltip: R,
                  })
                : null != S
                  ? (0, r.jsx)(b.Z, {
                        channel: S,
                        textVariant: "text-".concat(C, "/medium"),
                        textClassName: I,
                        iconClassName: T,
                        hideText: k,
                        hideTooltip: R,
                    })
                  : null;
        },
        G = o()(v.container, {
            [v.textXs]: "xs" === C,
            [v.textSm]: "sm" === C,
        }),
        Z = () =>
            null == j && null == L
                ? null
                : (0, r.jsx)(g.Z, {
                      customStatusActivity: j,
                      textSize: C,
                      animateEmoji: A,
                      hideEmoji: P,
                      hideTooltip: R,
                      textClassName: I,
                      iconClassName: T,
                      tooltipClassName: G,
                      voiceChannel: S,
                      hangStatus: L,
                      userId: null == t ? void 0 : t.id,
                  });
    return (0, r.jsxs)("div", {
        className: G,
        children: [
            U(),
            (0, r.jsx)(s.xvT, {
                variant: "text-".concat(C, "/normal"),
                className: o()(v.truncated, v.dot, I),
                children: y.l,
            }),
            Z(),
            N && (0, r.jsx)(m.Z, {}),
        ],
    });
}
