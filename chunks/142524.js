n.d(e, { A: () => y });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(311907),
    o = n(80682),
    d = n(643501),
    u = n(616356),
    c = n(961350),
    A = n(71393),
    p = n(576705),
    m = n(290863),
    h = n(977997),
    g = n(954571),
    f = n(279250),
    E = n(834757),
    C = n(727353),
    S = n(652215),
    T = n(945354);
class v extends l.PureComponent {
    componentDidMount() {
        let { user: t, streamApplication: e } = this.props;
        g.default.track(S.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: t.id,
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            game_id: null != e ? e.id : null,
            is_streaming: !0,
        });
    }
    render() {
        let {
            activity: t,
            user: e,
            stream: n,
            previewIsOpen: l,
            onAction: r,
            hideTip: s,
            onWatch: o,
            activeStream: d,
            currentUserId: u,
            canWatch: c,
            unavailableReason: A,
            streamApplication: p,
            isStandardGap: m,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: a()(T.yt, { [T.P0]: l, [T.iA]: !0 === m }),
                  children: (0, i.jsx)(C.Z, {
                      stream: n,
                      activeStream: d,
                      streamActivity: t,
                      streamApplication: p,
                      user: e,
                      currentUserId: u,
                      canWatch: c ?? !1,
                      unavailableReason: A,
                      onWatchStream: o,
                      onAction: r,
                      hideTip: s,
                      className: T.Rh,
                  }),
              });
    }
}
function y(t) {
    let { user: e, channel: n, ...r } = t,
        [a, g] = (0, s.yK)([h.A, A.A, p.A, d.default], () => (0, f.eo)(n, h.A, A.A, p.A, d.default)),
        C = (0, s.bG)([u.A], () => u.A.getStreamForUser(e.id, n.getGuildId())),
        S = (0, s.bG)([u.A], () => u.A.getActiveStreamForApplicationStream(C)),
        T = (0, s.bG)([c.default], () => c.default.getId()),
        y = (0, E.AO)(C),
        x = (0, s.bG)([m.A], () => (0, E.nr)(C, m.A)),
        N = l.useMemo(() => ({ [n.guild_id]: [e.id] }), [n.guild_id, e.id]);
    return (
        (0, o.Eq)(N, "StreamPreviewPopout"),
        (0, i.jsx)(v, {
            ...r,
            canWatch: a,
            unavailableReason: g,
            user: e,
            streamApplication: y,
            stream: C,
            activeStream: S,
            currentUserId: T,
            activity: x,
            channel: n,
        })
    );
}
