n.d(t, {
    A: () => N,
}),
    n(896048),
    n(114821),
    n(339614),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(435371),
    d = n(397927),
    f = n(933958),
    p = n(104171),
    h = n(63995),
    b = n(69407),
    g = n(616356),
    m = n(734057),
    A = n(287809),
    y = n(607567),
    O = n(403362),
    j = n(661191),
    v = n(181079),
    x = n(652215),
    E = n(985018),
    _ = n(653750);

function C(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: _.nM,
              children: [
                  (0, r.jsx)(e, {
                      className: _.RI,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(p.Ay, {
                      guildId: void 0,
                      users: t,
                      max: 6,
                  }),
              ],
          });
}

function S() {
    let e = (0, c.yK)([v.A, m.A], () =>
            j.default
                .keys(v.A.getFavoriteChannels())
                .map((e) => m.A.getChannel(e))
                .filter(O.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === x.rbe.GUILD_VOICE),
        l = e.filter((e) => e.type === x.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        i = (0, c.yK)(
            [y.Ay],
            () =>
                o().flatMap(n, (e) =>
                    y.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        a = (0, c.yK)([h.A], () =>
            o().flatMap(l, (e) =>
                h.A.getMutableParticipants(e, b.ip.SPEAKER)
                    .filter((e) => e.type === b.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        s = (0, c.bG)([h.A], () => {
            let e = 0;
            for (let t of l) e += h.A.getParticipantCount(t, b.ip.AUDIENCE);
            return e;
        }),
        u = (0, c.yK)(
            [g.A],
            () =>
                g.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        E = (0, c.yK)([f.Ay], () => {
            let e = f.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) {
                var r, l;
                n.push(
                    ...(null != (r = null == (l = e.get(i)) ? void 0 : l.flatMap((e) => Array.from(e.userIds)))
                        ? r
                        : []),
                );
            }
            return n;
        }, [t]),
        S = (0, c.yK)([A.default], () => E.map((e) => A.default.getUser(e)), [E]),
        I = (0, c.yK)([A.default], () => u.map((e) => A.default.getUser(e)), [u]),
        N = C(
            d.HKD,
            i.filter((e) => !u.includes(e.id) && !E.includes(e.id)),
        ),
        T =
            0 === a.length
                ? null
                : (0, r.jsxs)("div", {
                      className: _.nM,
                      children: [
                          (0, r.jsx)(d.qux, {
                              size: "lg",
                              color: "currentColor",
                              className: _.RI,
                          }),
                          (0, r.jsx)(p.Ay, {
                              guildId: void 0,
                              users: a,
                              max: 3,
                          }),
                          (0, r.jsxs)("div", {
                              className: _.GZ,
                              children: [
                                  (0, r.jsx)(d.LoC, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      className: _._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: s,
                                  }),
                              ],
                          }),
                      ],
                  }),
        P = C(
            d.Fzq,
            I.filter((e) => null != e && !E.includes(e.id)),
        ),
        w = C(d.bxf, S);
    return (0, r.jsxs)(r.Fragment, {
        children: [T, N, P, w],
    });
}

function I() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: a()(_.nM, _.Dl),
                children: (0, r.jsx)("span", {
                    className: a()(_.cN, _.NT),
                    children: E.intl.string(E.t.wMWyci),
                }),
            }),
            (0, r.jsx)(S, {}),
        ],
    });
}

function N(e) {
    let { "aria-label": t = !1, onShow: n, children: i } = e,
        a = l.useMemo(
            () =>
                (0, r.jsx)("div", {
                    className: _.A_,
                    children: (0, r.jsx)(I, {}),
                }),
            [],
        );
    return (0, r.jsx)(u.m_, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        onTooltipShow: n,
        asContainer: !0,
        children: i,
    });
}
