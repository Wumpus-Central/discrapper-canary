"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(110259),
    a = n(417597),
    o = n(397927),
    c = n(308368),
    d = n(139286),
    u = n(627363),
    h = n(386467),
    A = n(760751),
    p = n(383501),
    g = n(287809),
    m = n(762370),
    _ = n(25528),
    f = n(652215),
    x = n(55705),
    C = n(985018),
    E = n(512977);
function I(e) {
    let t,
        { activity: n, channel: l, userId: r } = e,
        d = (0, u.YY)(n.application_id).data,
        [h, A] = s.useState(!1),
        [g, m] = s.useState(0),
        _ = (0, a.bG)([p.A], () => p.A.getChannelId() !== l.id);
    async function I() {
        m(1);
        try {
            await c.A.sendActivityInvite({
                type: f.xL.STREAM_REQUEST,
                channelId: l.id,
                activity: n,
                content: `<@${r}>`,
                location: "request to stream hover",
                targetUserId: r,
            });
        } catch (e) {
            m(0);
            return;
        }
        m(2);
    }
    if ((_ && (t = C.intl.string(x.default.qRXats)), n.type === f.$pd.PLAYING)) {
        let e = d?.getIconURL(46);
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
                    loading: 1 === g,
                    disabled: _ || 2 === g,
                    fullWidth: !0,
                    size: "sm",
                    text: 2 === g ? C.intl.string(x.default["8HU1M2"]) : C.intl.string(x.default.DKHhec),
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
        o = (0, a.bG)([g.default], () => g.default.getUser(t)),
        c = (0, _.Ay)(t, n.guild_id),
        u = (0, m.A)(t, n.id),
        p = s.useMemo(
            () =>
                l.uniqWith(c, (e, t) => {
                    if (e.application_id === t.application_id) return !0;
                    let n = A.A.searchGamesByName(e.name),
                        i = new Set(A.A.searchGamesByName(t.name));
                    return !!(n.length > 0 && n.length === i.size && n.every((e) => i.has(e))) || e.name === t.name;
                }),
            [c],
        ),
        f = null == o || !u || 0 === p.length;
    return ((0, d.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT, properties: {} },
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
                      children: p.map((e) =>
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
