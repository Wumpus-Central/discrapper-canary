n.d(t, { A: () => I }), n(114821), n(339614);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    c = n(397927),
    u = n(933958),
    d = n(104171),
    f = n(297334),
    p = n(47167),
    h = n(392567),
    b = n(21119),
    g = n(907459),
    m = n(616356),
    A = n(994500),
    y = n(543465),
    O = n(287809),
    j = n(607567),
    v = n(985018),
    x = n(653750);
function E(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: x.nM,
              children: [
                  (0, r.jsx)(t, {
                      className: x.RI,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(d.Ay, {
                      users: n,
                      max: 6,
                  }),
              ],
          });
}
function _(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: v.intl.string(v.t.fpKdS1),
          })
        : (0, r.jsx)(h.A, {
              muteConfig: t,
              className: n,
          });
}
function C(e) {
    let t,
        n,
        i,
        o,
        d,
        p,
        h,
        v,
        C,
        S,
        I,
        N,
        T,
        { channel: P } = e,
        w = P.id,
        {
            activityUsers: R,
            streamUsers: D,
            voiceUsers: M,
        } = ((t = P.id),
        (n = (0, s.yK)([A.A], () => A.A.getBlockedOrIgnoredIDs())),
        (i = (0, s.bG)([b.A], () => b.A.getUserAffinitiesMap(), [])),
        (o = (0, s.yK)(
            [u.Ay, O.default],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => O.default.getUser(e)),
            [t],
        )),
        (d = l.useMemo(() => (0, f.aw)(o, n), [o, n])),
        (p = l.useMemo(() => (0, g.L)(d, i, "DirectMessageTooltip - activityUsers"), [d, i])),
        (h = (0, s.yK)([m.A, O.default], () => {
            let e = m.A.getAllApplicationStreamsForChannel(t)
                .map((e) => e.ownerId)
                .map((e) => O.default.getUser(e));
            return (0, f.aw)(e, n);
        }, [t, n])),
        (v = l.useMemo(() => (0, f.aw)(h, n), [h, n])),
        (C = l.useMemo(() => (0, g.L)(v, i, "DirectMessageTooltip - activityUsers"), [v, i])),
        (S = l.useMemo(() => C.filter((e) => !p.some((t) => t.id === e.id)), [C, p])),
        (I = (0, s.yK)([j.Ay], () => {
            let e = j.Ay.getVoiceStatesForChannel(P).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, f.aw)(e, n);
        }, [P, n])),
        (N = l.useMemo(() => (0, f.aw)(I, n), [I, n])),
        (T = l.useMemo(() => (0, g.L)(N, i, "DirectMessageTooltip - voiceUsers"), [N, i])),
        {
            voiceUsers: l.useMemo(
                () => T.filter((e) => !p.some((t) => t.id === e.id) && !C.some((t) => t.id === e.id)),
                [T, p, C],
            ),
            streamUsers: S,
            activityUsers: p,
        }),
        L = (0, r.jsx)(E, {
            icon: c.HKD,
            users: M,
        }),
        G = (0, r.jsx)(E, {
            icon: c.Fzq,
            users: D,
        }),
        k = (0, r.jsx)(E, {
            icon: c.bxf,
            users: R,
        }),
        { isMuted: U, muteConfig: V } = (0, s.cf)(
            [y.Ay],
            () => ({
                isMuted: y.Ay.isChannelMuted(null, w),
                muteConfig: y.Ay.getChannelMuteConfig(null, w),
            }),
            [w],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            L,
            G,
            k,
            U
                ? (0, r.jsx)(_, {
                      muteConfig: V,
                      className: a()(x.LM, { [x.Sx]: null != L || null != G }),
                  })
                : null,
        ],
    });
}
function S(e) {
    let { channel: t } = e,
        n = (0, p.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: a()(x.nM, x.Dl),
                children: (0, r.jsx)("span", {
                    className: a()(x.cN, x.NT),
                    children: n,
                }),
            }),
            (0, r.jsx)(C, { channel: t }),
        ],
    });
}
function I(e) {
    let { channel: t, children: n } = e,
        i = (0, p.Ay)(t),
        a = l.useMemo(
            () =>
                (0, r.jsx)("div", {
                    className: x.A_,
                    children: (0, r.jsx)(S, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(o.m_, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": null != i ? i : void 0,
        asContainer: !0,
        children: n,
    });
}
