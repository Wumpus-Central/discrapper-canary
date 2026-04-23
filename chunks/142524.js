n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(311907),
    o = n(80682),
    d = n(643501),
    c = n(616356),
    u = n(961350),
    h = n(71393),
    m = n(576705),
    p = n(290863),
    g = n(977997),
    f = n(954571),
    _ = n(279250),
    x = n(834757),
    A = n(727353),
    E = n(652215),
    S = n(378219);
class I extends r.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        f.default.track(E.HAw.OPEN_POPOUT, {
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
            stream: n,
            previewIsOpen: r,
            onAction: a,
            hideTip: l,
            onWatch: o,
            activeStream: d,
            currentUserId: c,
            canWatch: u,
            unavailableReason: h,
            streamApplication: m,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(S.yt, { [S.P0]: r }),
                  children: (0, i.jsx)(A.Z, {
                      stream: n,
                      activeStream: d,
                      streamActivity: e,
                      streamApplication: m,
                      user: t,
                      currentUserId: c,
                      canWatch: u ?? !1,
                      unavailableReason: h,
                      onWatchStream: o,
                      onAction: a,
                      hideTip: l,
                  }),
              });
    }
}
function v(e) {
    let { user: t, channel: n, ...a } = e,
        [s, f] = (0, l.yK)([g.A, h.A, m.A, d.default], () => (0, _.eo)(n, g.A, h.A, m.A, d.default)),
        A = (0, l.bG)([c.A], () => c.A.getStreamForUser(t.id, n.getGuildId())),
        E = (0, l.bG)([c.A], () => c.A.getActiveStreamForApplicationStream(A)),
        S = (0, l.bG)([u.default], () => u.default.getId()),
        v = (0, x.AO)(A),
        b = (0, l.bG)([p.A], () => (0, x.nr)(A, p.A)),
        C = r.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, o.Eq)(C, "StreamPreviewPopout"),
        (0, i.jsx)(I, {
            ...a,
            canWatch: s,
            unavailableReason: f,
            user: t,
            streamApplication: v,
            stream: A,
            activeStream: E,
            currentUserId: S,
            activity: b,
            channel: n,
        })
    );
}
