n.d(t, { Z: () => P }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    u = n(717881),
    c = n(616780),
    d = n(850827),
    m = n(576855),
    h = n(258609),
    g = n(199902),
    f = n(314897),
    p = n(430824),
    v = n(496675),
    S = n(158776),
    I = n(979651),
    x = n(626135),
    T = n(102172),
    Z = n(687516),
    y = n(718805),
    N = n(871118),
    E = n(981631),
    C = n(388032),
    A = n(951078);
class j extends i.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        x.default.track(E.rMx.OPEN_POPOUT, {
            type: 'Stream Preview',
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: i, canWatch: r, unavailableReason: a } = this.props;
        return (0, l.jsxs)(o.P3F, {
            onClick: t,
            className: A.previewContainer,
            children: [
                (0, l.jsx)(N.Z, {
                    className: A.previewImage,
                    stream: e
                }),
                r
                    ? (0, l.jsx)('div', {
                          className: A.previewHover,
                          children: (0, l.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: A.white,
                              children: (0, y.Z)(e, n, i, a)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: i, onAction: r, hideTip: s } = this.props;
        return null == n
            ? null
            : (0, l.jsx)('div', {
                  className: a()(A.streamPreviewWrapper, { [A.mounted]: i }),
                  children: (0, l.jsxs)('div', {
                      className: A.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, l.jsxs)('div', {
                              className: A.body,
                              children: [
                                  null != e
                                      ? (0, l.jsx)(u.Z, {
                                            hideHeader: !0,
                                            type: u.P.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: E.ZY5.GO_LIVE_MODAL,
                                                    section: E.jXE.STREAM_VIEWER_POPOUT
                                                }
                                            },
                                            onAction: r
                                        })
                                      : (0, l.jsx)(d.Z, {
                                            type: u.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: A.activityActions,
                                            color: A.watchButton,
                                            onAction: r
                                        }),
                                  !s &&
                                      (0, l.jsx)(m.Z, {
                                          type: m.Z.Types.INLINE,
                                          className: A.protip,
                                          children: __OVERLAY__ ? C.intl.string(C.t['YRdw7+']) : C.intl.string(C.t.CCTgbG)
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
}
function P(e) {
    let { user: t, channel: n, ...r } = e,
        [a, o] = (0, s.Wu)([I.Z, p.Z, v.Z, h.Z], () => (0, T.p9)(n, I.Z, p.Z, v.Z, h.Z)),
        u = (0, s.e7)([g.Z], () => g.Z.getStreamForUser(t.id, n.getGuildId())),
        d = (0, s.e7)([g.Z], () => g.Z.getActiveStreamForApplicationStream(u)),
        m = (0, s.e7)([f.default], () => f.default.getId()),
        x = (0, Z.Cf)(u),
        y = (0, s.e7)([S.Z], () => (0, Z.Um)(u, S.Z)),
        N = i.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, c.$)(N),
        (0, l.jsx)(j, {
            ...r,
            canWatch: a,
            unavailableReason: o,
            user: t,
            streamApplication: x,
            stream: u,
            activeStream: d,
            currentUserId: m,
            activity: y
        })
    );
}
