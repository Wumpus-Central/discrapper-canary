i.d(t, { A: () => C });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    s = i(311907),
    o = i(80682),
    d = i(643501),
    c = i(616356),
    u = i(961350),
    m = i(71393),
    _ = i(576705),
    A = i(290863),
    g = i(977997),
    h = i(954571),
    f = i(279250),
    p = i(834757),
    S = i(727353),
    I = i(652215),
    x = i(945354);
class v extends a.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        h.default.track(I.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
        });
    }
    render() {
        let {
            activity: e,
            user: t,
            stream: i,
            previewIsOpen: a,
            onAction: l,
            hideTip: s,
            onWatch: o,
            activeStream: d,
            currentUserId: c,
            canWatch: u,
            unavailableReason: m,
            streamApplication: _,
        } = this.props;
        return null == i
            ? null
            : (0, n.jsx)("div", {
                  className: r()(x.yt, { [x.P0]: a }),
                  children: (0, n.jsx)(S.Z, {
                      stream: i,
                      activeStream: d,
                      streamActivity: e,
                      streamApplication: _,
                      user: t,
                      currentUserId: c,
                      canWatch: u ?? !1,
                      unavailableReason: m,
                      onWatchStream: o,
                      onAction: l,
                      hideTip: s,
                      className: x.Rh,
                  }),
              });
    }
}
function C(e) {
    let { user: t, channel: i, ...l } = e,
        [r, h] = (0, s.yK)([g.A, m.A, _.A, d.default], () => (0, f.eo)(i, g.A, m.A, _.A, d.default)),
        S = (0, s.bG)([c.A], () => c.A.getStreamForUser(t.id, i.getGuildId())),
        I = (0, s.bG)([c.A], () => c.A.getActiveStreamForApplicationStream(S)),
        x = (0, s.bG)([u.default], () => u.default.getId()),
        C = (0, p.AO)(S),
        E = (0, s.bG)([A.A], () => (0, p.nr)(S, A.A)),
        y = a.useMemo(() => ({ [i.guild_id]: [t.id] }), [i.guild_id, t.id]);
    return (
        (0, o.E)(y, "StreamPreviewPopout"),
        (0, n.jsx)(v, {
            ...l,
            canWatch: r,
            unavailableReason: h,
            user: t,
            streamApplication: C,
            stream: S,
            activeStream: I,
            currentUserId: x,
            activity: E,
            channel: i,
        })
    );
}
