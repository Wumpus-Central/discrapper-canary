n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(717881),
    u = n(616780),
    d = n(850827),
    m = n(576855),
    f = n(258609),
    p = n(199902),
    h = n(314897),
    g = n(430824),
    v = n(496675),
    _ = n(158776),
    S = n(979651),
    I = n(626135),
    x = n(102172),
    E = n(687516),
    C = n(718805),
    Z = n(871118),
    y = n(981631),
    b = n(388032),
    N = n(846450);
class T extends l.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        I.default.track(y.rMx.OPEN_POPOUT, {
            type: 'Stream Preview',
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: l, canWatch: a, unavailableReason: r } = this.props;
        return (0, i.jsxs)(o.P3F, {
            onClick: t,
            className: N.previewContainer,
            children: [
                (0, i.jsx)(Z.Z, {
                    className: N.previewImage,
                    stream: e
                }),
                a
                    ? (0, i.jsx)('div', {
                          className: N.previewHover,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: N.white,
                              children: (0, C.Z)(e, n, l, r)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: l, onAction: a, hideTip: s } = this.props;
        return null == n
            ? null
            : (0, i.jsx)('div', {
                  className: r()(N.streamPreviewWrapper, { [N.mounted]: l }),
                  children: (0, i.jsxs)('div', {
                      className: N.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, i.jsxs)('div', {
                              className: N.body,
                              children: [
                                  null != e
                                      ? (0, i.jsx)(c.Z, {
                                            hideHeader: !0,
                                            type: c.P.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: y.ZY5.GO_LIVE_MODAL,
                                                    section: y.jXE.STREAM_VIEWER_POPOUT
                                                }
                                            },
                                            onAction: a
                                        })
                                      : (0, i.jsx)(d.Z, {
                                            type: c.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: N.activityActions,
                                            color: N.watchButton,
                                            onAction: a
                                        }),
                                  !s &&
                                      (0, i.jsx)(m.Z, {
                                          type: m.Z.Types.INLINE,
                                          className: N.protip,
                                          children: __OVERLAY__ ? b.intl.string(b.t['YRdw7+']) : b.intl.string(b.t.CCTgbG)
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
}
function A(e) {
    let { user: t, channel: n, ...a } = e,
        [r, o] = (0, s.Wu)([S.Z, g.Z, v.Z, f.Z], () => (0, x.p9)(n, S.Z, g.Z, v.Z, f.Z)),
        c = (0, s.e7)([p.Z], () => p.Z.getStreamForUser(t.id, n.getGuildId())),
        d = (0, s.e7)([p.Z], () => p.Z.getActiveStreamForApplicationStream(c)),
        m = (0, s.e7)([h.default], () => h.default.getId()),
        I = (0, E.Cf)(c),
        C = (0, s.e7)([_.Z], () => (0, E.Um)(c, _.Z)),
        Z = l.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, u.$)(Z),
        (0, i.jsx)(T, {
            ...a,
            canWatch: r,
            unavailableReason: o,
            user: t,
            streamApplication: I,
            stream: c,
            activeStream: d,
            currentUserId: m,
            activity: C
        })
    );
}
