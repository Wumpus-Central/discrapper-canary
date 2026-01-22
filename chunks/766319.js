n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n(110259),
    s = n(417597),
    o = n(397927),
    c = n(308368),
    u = n(139286),
    d = n(627363),
    f = n(386467),
    p = n(760751),
    h = n(383501),
    b = n(287809),
    g = n(762370),
    m = n(25528),
    A = n(652215),
    y = n(426127),
    O = n(985018),
    j = n(281783);

function v(e) {
    let t,
        { activity: n, channel: i, userId: a } = e,
        u = (0, d.YY)(n.application_id).data,
        [f, p] = l.useState(!1),
        [b, g] = l.useState(0),
        m = (0, s.bG)([h.A], () => h.A.getChannelId() !== i.id);
    async function v() {
        g(1);
        try {
            await c.A.sendActivityInvite({
                type: A.xL.STREAM_REQUEST,
                channelId: i.id,
                activity: n,
                content: "<@".concat(a, ">"),
                location: "request to stream hover",
                targetUserId: a,
            });
        } catch (e) {
            g(0);
            return;
        }
        g(2);
    }
    if ((m && (t = O.intl.string(y.default.qRXats)), n.type === A.$pd.PLAYING)) {
        let e = null == u ? void 0 : u.getIconURL(46);
        return (0, r.jsxs)("div", {
            className: j.gd,
            children: [
                (0, r.jsxs)("div", {
                    className: j.xi,
                    children: [
                        f || null == e
                            ? (0, r.jsx)(o._7Z, {
                                  size: "custom",
                                  width: 46,
                                  height: 46,
                              })
                            : (0, r.jsx)("img", {
                                  src: e,
                                  alt: n.name,
                                  onError: () => p(!0),
                              }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: O.intl.string(O.t.BMTj28),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    children: n.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(o.Button, {
                    loading: 1 === b,
                    disabled: m || 2 === b,
                    fullWidth: !0,
                    size: "sm",
                    text: 2 === b ? O.intl.string(y.default["8HU1M2"]) : O.intl.string(y.default.DKHhec),
                    onClick: v,
                }),
                null != t &&
                    (0, r.jsx)(o.Text, {
                        className: j.H$,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        });
    }
}

function x(e) {
    let { userId: t, channel: n } = e,
        o = (0, s.bG)([b.default], () => b.default.getUser(t)),
        c = (0, m.A)(t, n.guild_id),
        d = (0, g.A)(t, n.id),
        h = l.useMemo(
            () =>
                i.uniqWith(c, (e, t) => {
                    if (e.application_id === t.application_id) return !0;
                    let n = p.A.getGameByName(e.name),
                        r = p.A.getGameByName(t.name);
                    return (null != n && n === r) || e.name === t.name;
                }),
            [c],
        ),
        A = null == o || !d || 0 === h.length;
    return ((0, u.A)(
        {
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
            properties: {},
        },
        {
            disableTrack: A,
        },
    ),
    A)
        ? null
        : (0, r.jsx)(f.A.Provider, {
              value: n.guild_id,
              children: (0, r.jsx)("div", {
                  className: j.zr,
                  children: (0, r.jsx)("div", {
                      className: j.Ci,
                      children: h.map((e) =>
                          (0, r.jsx)(
                              v,
                              {
                                  activity: e,
                                  channel: n,
                                  userId: t,
                              },
                              "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name),
                          ),
                      ),
                  }),
              }),
          });
}
