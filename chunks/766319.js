n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(110259),
    r = n(417597),
    o = n(397927),
    d = n(308368),
    c = n(139286),
    u = n(627363),
    h = n(386467),
    A = n(760751),
    m = n(383501),
    p = n(287809),
    g = n(762370),
    _ = n(25528),
    f = n(652215),
    x = n(426127),
    C = n(985018),
    E = n(281783);
function I(e) {
    let t,
        { activity: n, channel: s, userId: a } = e,
        c = (0, u.YY)(n.application_id).data,
        [h, A] = l.useState(!1),
        [p, g] = l.useState(0),
        _ = (0, r.bG)([m.A], () => m.A.getChannelId() !== s.id);
    async function I() {
        g(1);
        try {
            await d.A.sendActivityInvite({
                type: f.xL.STREAM_REQUEST,
                channelId: s.id,
                activity: n,
                content: `<@${a}>`,
                location: "request to stream hover",
                targetUserId: a,
            });
        } catch (e) {
            g(0);
            return;
        }
        g(2);
    }
    if ((_ && (t = C.intl.string(x.default.qRXats)), n.type === f.$pd.PLAYING)) {
        let e = c?.getIconURL(46);
        return (0, i.jsxs)("div", {
            className: E.gd,
            children: [
                (0, i.jsxs)("div", {
                    className: E.xi,
                    children: [
                        h || null == e
                            ? (0, i.jsx)(o._7Z, { size: "custom", width: 46, height: 46 })
                            : (0, i.jsx)("img", { src: e, alt: n.name, onError: () => A(!0) }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: C.intl.string(C.t.BMTj28),
                                }),
                                (0, i.jsx)(o.Text, { variant: "text-md/medium", children: n.name }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(o.Button, {
                    loading: 1 === p,
                    disabled: _ || 2 === p,
                    fullWidth: !0,
                    size: "sm",
                    text: 2 === p ? C.intl.string(x.default["8HU1M2"]) : C.intl.string(x.default.DKHhec),
                    onClick: I,
                }),
                null != t &&
                    (0, i.jsx)(o.Text, {
                        className: E.H$,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        });
    }
}
function b(e) {
    let { userId: t, channel: n } = e,
        o = (0, r.bG)([p.default], () => p.default.getUser(t)),
        d = (0, _.Ay)(t, n.guild_id),
        u = (0, g.A)(t, n.id),
        m = l.useMemo(
            () =>
                s.uniqWith(d, (e, t) => {
                    if (e.application_id === t.application_id) return !0;
                    let n = A.A.getGameByName(e.name),
                        i = A.A.getGameByName(t.name);
                    return (null != n && n === i) || e.name === t.name;
                }),
            [d],
        ),
        f = null == o || !u || 0 === m.length;
    return ((0, c.A)(
        { type: a.ImpressionTypes.POPOUT, name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT, properties: {} },
        { disableTrack: f },
    ),
    f)
        ? null
        : (0, i.jsx)(h.A.Provider, {
              value: n.guild_id,
              children: (0, i.jsx)("div", {
                  className: E.zr,
                  children: (0, i.jsx)("div", {
                      className: E.Ci,
                      children: m.map((e) =>
                          (0, i.jsx)(
                              I,
                              { activity: e, channel: n, userId: t },
                              `${e.session_id}-${e.application_id}-${e.name}`,
                          ),
                      ),
                  }),
              }),
          });
}
