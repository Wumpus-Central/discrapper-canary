i.d(t, { A: () => x });
var n = i(627968),
    a = i(64700),
    r = i(503698),
    l = i.n(r),
    s = i(311907),
    o = i(80682),
    c = i(643501),
    d = i(616356),
    u = i(961350),
    m = i(71393),
    _ = i(576705),
    p = i(290863),
    A = i(977997),
    h = i(954571),
    f = i(279250),
    g = i(834757),
    S = i(727353),
    v = i(652215),
    C = i(945354);
class I extends a.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        h.default.track(v.HAw.OPEN_POPOUT, {
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
            onAction: r,
            hideTip: s,
            onWatch: o,
            activeStream: c,
            currentUserId: d,
            canWatch: u,
            unavailableReason: m,
            streamApplication: _,
            isStandardGap: p,
        } = this.props;
        return null == i
            ? null
            : (0, n.jsx)("div", {
                  className: l()(C.yt, { [C.P0]: a, [C.iA]: !0 === p }),
                  children: (0, n.jsx)(S.Z, {
                      stream: i,
                      activeStream: c,
                      streamActivity: e,
                      streamApplication: _,
                      user: t,
                      currentUserId: d,
                      canWatch: u ?? !1,
                      unavailableReason: m,
                      onWatchStream: o,
                      onAction: r,
                      hideTip: s,
                      className: C.Rh,
                  }),
              });
    }
}
function x(e) {
    let { user: t, channel: i, ...r } = e,
        [l, h] = (0, s.yK)([A.A, m.A, _.A, c.default], () => (0, f.eo)(i, A.A, m.A, _.A, c.default)),
        S = (0, s.bG)([d.A], () => d.A.getStreamForUser(t.id, i.getGuildId())),
        v = (0, s.bG)([d.A], () => d.A.getActiveStreamForApplicationStream(S)),
        C = (0, s.bG)([u.default], () => u.default.getId()),
        x = (0, g.AO)(S),
        E = (0, s.bG)([p.A], () => (0, g.nr)(S, p.A)),
        T = a.useMemo(() => ({ [i.guild_id]: [t.id] }), [i.guild_id, t.id]);
    return (
        (0, o.E)(T, "StreamPreviewPopout"),
        (0, n.jsx)(I, {
            ...r,
            canWatch: l,
            unavailableReason: h,
            user: t,
            streamApplication: x,
            stream: S,
            activeStream: v,
            currentUserId: C,
            activity: E,
            channel: i,
        })
    );
}
