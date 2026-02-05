n.d(t, { A: () => S });
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
    g = n(383501),
    m = n(287809),
    p = n(762370),
    _ = n(25528),
    x = n(652215),
    f = n(426127),
    E = n(985018),
    C = n(281783);
function I(e) {
    let t,
        { activity: n, channel: s, userId: a } = e,
        c = (0, u.YY)(n.application_id).data,
        [h, A] = l.useState(!1),
        [m, p] = l.useState(0),
        _ = (0, r.bG)([g.A], () => g.A.getChannelId() !== s.id);
    async function I() {
        p(1);
        try {
            await d.A.sendActivityInvite({
                type: x.xL.STREAM_REQUEST,
                channelId: s.id,
                activity: n,
                content: `<@${a}>`,
                location: "request to stream hover",
                targetUserId: a,
            });
        } catch (e) {
            p(0);
            return;
        }
        p(2);
    }
    if ((_ && (t = E.intl.string(f.default.qRXats)), n.type === x.$pd.PLAYING)) {
        let e = c?.getIconURL(46);
        return (0, i.jsxs)("div", {
            className: C.gd,
            children: [
                (0, i.jsxs)("div", {
                    className: C.xi,
                    children: [
                        h || null == e
                            ? (0, i.jsx)(o._7Z, { size: "custom", width: 46, height: 46 })
                            : (0, i.jsx)("img", { src: e, alt: n.name, onError: () => A(!0) }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: E.intl.string(E.t.BMTj28),
                                }),
                                (0, i.jsx)(o.Text, { variant: "text-md/medium", children: n.name }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(o.Button, {
                    loading: 1 === m,
                    disabled: _ || 2 === m,
                    fullWidth: !0,
                    size: "sm",
                    text: 2 === m ? E.intl.string(f.default["8HU1M2"]) : E.intl.string(f.default.DKHhec),
                    onClick: I,
                }),
                null != t &&
                    (0, i.jsx)(o.Text, {
                        className: C.H$,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        });
    }
}
function S(e) {
    let { userId: t, channel: n } = e,
        o = (0, r.bG)([m.default], () => m.default.getUser(t)),
        d = (0, _.A)(t, n.guild_id),
        u = (0, p.A)(t, n.id),
        g = l.useMemo(
            () =>
                s.uniqWith(d, (e, t) => {
                    if (e.application_id === t.application_id) return !0;
                    let n = A.A.getGameByName(e.name),
                        i = A.A.getGameByName(t.name);
                    return (null != n && n === i) || e.name === t.name;
                }),
            [d],
        ),
        x = null == o || !u || 0 === g.length;
    return ((0, c.A)(
        { type: a.ImpressionTypes.POPOUT, name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT, properties: {} },
        { disableTrack: x },
    ),
    x)
        ? null
        : (0, i.jsx)(h.A.Provider, {
              value: n.guild_id,
              children: (0, i.jsx)("div", {
                  className: C.zr,
                  children: (0, i.jsx)("div", {
                      className: C.Ci,
                      children: g.map((e) =>
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
