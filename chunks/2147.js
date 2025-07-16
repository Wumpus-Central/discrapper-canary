(n.d(t, {
    G: () => eZ,
    Z: () => e_
}),
    n(997841),
    n(953529),
    n(290780));
var i = n(255367),
    l = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(313361),
    o = n(697988),
    c = n(683860),
    d = n(442837),
    u = n(692547),
    h = n(780384),
    m = n(755721),
    g = n(481060),
    p = n(787014),
    f = n(771340),
    x = n(410575),
    j = n(852860),
    b = n(129865),
    v = n(902840),
    y = n(622822),
    C = n(429673),
    N = n(933557),
    S = n(541716),
    E = n(752305),
    O = n(893718),
    T = n(600164),
    w = n(313201),
    Z = n(318766),
    R = n(907040),
    I = n(906411),
    _ = n(633302),
    P = n(109434),
    A = n(162389),
    L = n(946458),
    D = n(968437),
    M = n(665906),
    k = n(456077),
    B = n(747212),
    V = n(210887),
    U = n(131704),
    W = n(601964),
    H = n(314897),
    G = n(388610),
    F = n(430824),
    z = n(496675),
    X = n(903223),
    Y = n(594174),
    J = n(934415),
    q = n(70956),
    $ = n(630388),
    Q = n(63063),
    K = n(129724),
    ee = n(732335),
    et = n(296146),
    en = n(564735),
    ei = n(981631),
    el = n(176505),
    er = n(185923),
    es = n(710352),
    ea = n(124368),
    eo = n(388032),
    ec = n(194512),
    ed = n(20493);
function eu(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                eu(e, t, n[t]);
            }));
    }
    return e;
}
function em(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eg = (0, w.hQ)(),
    ep = (0, w.hQ)(),
    ef = (0, w.hQ)(),
    ex = (0, w.hQ)(),
    ej = (0, w.hQ)(),
    eb = (0, w.hQ)(),
    ev = (0, w.hQ)(),
    ey = (0, w.hQ)(),
    eC = (0, w.hQ)(),
    eN = (0, w.hQ)(),
    eS = (0, w.hQ)(),
    eE = (0, U.kt)({
        id: '1',
        type: ei.d4z.DM
    }),
    eO = {
        popoutLocation: {
            page: ei.ZY5.CHANNEL_SETTINGS,
            section: ei.jXE.CHANNEL_DEFAULT_REACTION,
            object: ei.qAy.EMOJI_PICKER_BUTTON
        }
    },
    eT = {
        popoutLocation: {
            page: ei.ZY5.CHANNEL_SETTINGS,
            section: ei.jXE.CHANNEL_NAME,
            object: ei.qAy.EMOJI_PICKER_BUTTON
        }
    },
    ew = 'AUTOMATIC_RTC_REGION',
    eZ = d.ZP.connectStores([G.Z], () => {
        let { channel: e, submitting: t } = G.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, p.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: r, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: m, videoQualityMode: g, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b, defaultTagSetting: v } = e;
                (e.isThread() && (t = (0, k.Z)(t, !0)),
                    (0, p.wk)(e.id, {
                        name: t,
                        type: n,
                        topic: i,
                        bitrate: l,
                        userLimit: r,
                        nsfw: s,
                        flags: a,
                        rateLimitPerUser: o,
                        defaultThreadRateLimitPerUser: c,
                        autoArchiveDuration: null == d ? void 0 : d.autoArchiveDuration,
                        locked: null == d ? void 0 : d.locked,
                        invitable: null == d ? void 0 : d.invitable,
                        defaultAutoArchiveDuration: u,
                        template: h,
                        rtcRegion: m,
                        videoQualityMode: g,
                        defaultReactionEmoji: f,
                        availableTags: x,
                        defaultSortOrder: j,
                        defaultForumLayout: b,
                        defaultTagSetting: v
                    }));
            }
        };
    })(j.Z);
function eR(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = l.useRef(null),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(R.Z, {
                    channel: n,
                    guildId: r,
                    pickerIntention: er.Hz.CHANNEL_NAME,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (null != n && n.type === I.B.UNICODE && t(n.surrogates), i && l());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: eT
                });
            },
            [n, r, t]
        );
    return (0, i.jsx)(g.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: g.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                Z.Z,
                em(eh({}, e), {
                    ref: s,
                    active: n,
                    className: ec.emojiButton,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10
                        }
                    }
                })
            );
        }
    });
}
class eI extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && f.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : '';
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : '') !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, E.JM)(r)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, K.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, K.A)(e * q.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, d, h, p;
        let f,
            j,
            { canManageChannels: b, canSendMessages: v, isThreadModerator: C, canManageThread: N, guild: E, isForumPost: T, isOwner: w, showAdvancedSlowModeSetting: Z } = this.props,
            R = U.Ec.has(e.type),
            I = e.isForumLikeChannel(),
            P = I && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            M = (null == (l = Y.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            k = U.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              title: I ? eo.intl.string(eo.t.yR6Hwc) : eo.intl.string(eo.t.X8jMDg),
                              className: ed.marginTop20,
                              children: (0, i.jsx)(O.Z, {
                                  innerClassName: ec.topic,
                                  characterCountClassName: ec.topicCharacterCount,
                                  maxCharacterCount: I ? el.Z7 : el.$x,
                                  onChange: this.handleChangeRichTopic,
                                  placeholder: eo.intl.string(eo.t['71fbmp']),
                                  channel: eE,
                                  textValue: this.state.textTopicValue,
                                  richValue: this.state.richTopicValue,
                                  type: I ? S.Ie.FORUM_CHANNEL_GUIDELINES : S.Ie.CHANNEL_TOPIC,
                                  onFocus: () => {
                                      this.setState({ topicFocused: !0 });
                                  },
                                  onBlur: () => {
                                      this.setState({ topicFocused: !1 });
                                  },
                                  focused: this.state.topicFocused,
                                  onSubmit: this.handleSubmit,
                                  disableThemedBackground: !0,
                                  error: this.getError('topic'),
                                  disabled: !b
                              })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) })
                      ]
                  })
                : null,
            V =
                I && M
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  title: eo.intl.string(eo.t.qk2jdX),
                                  className: ed.marginTop20,
                                  children: (0, i.jsx)(g.Kx8, {
                                      placeholder: eo.intl.string(eo.t.DDjD1N),
                                      value: _.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: es.Vb,
                                      disabled: !b,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) })
                          ]
                      })
                    : null,
            H = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      error: this.getError('available_tags'),
                                      id: eg,
                                      className: ec.formTitle,
                                      children: eo.intl.string(eo.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(g.R94, {
                                      id: ep,
                                      type: g.R94.Types.DESCRIPTION,
                                      className: ec.description,
                                      children: eo.intl.string(eo.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(A.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(g.XZJ, {
                              disabled: !b || P,
                              value: e.hasFlag(el.zZ.REQUIRE_TAG),
                              type: g.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  children: eo.intl.string(eo.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: ec.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(ec.settingsLeft, ec.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(g.vwX, {
                                              id: ef,
                                              className: ec.formTitle,
                                              children: eo.intl.string(eo.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              id: ep,
                                              type: g.R94.Types.DESCRIPTION,
                                              className: ec.description,
                                              children: eo.intl.string(eo.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: ec.buttonRow,
                                              children: [
                                                  (0, i.jsx)(g.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: g.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) =>
                                                          (0, i.jsx)(
                                                              m.zx,
                                                              em(eh({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  disabled: !b,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                                  children: eo.intl.string(eo.t['59QgaG'])
                                                              })
                                                          )
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(m.zx, {
                                                            className: ec.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: m.zx.Sizes.MIN,
                                                            look: m.zx.Looks.LINK,
                                                            color: m.zx.Colors.RED,
                                                            children: eo.intl.string(eo.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(L.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) })
                      ]
                  })
                : null,
            F = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: ec.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(g.xJW, {
                                      className: s()(ec.settingsLeft, ec.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(g.hjN, {
                                              title: eo.intl.string(eo.t.kQvoCw),
                                              children: (0, i.jsx)(g.q4e, {
                                                  options: [
                                                      {
                                                          label: eo.intl.string(eo.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: eo.intl.string(eo.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(g.R94, {
                                              className: ed.marginTop8,
                                              type: g.R94.Types.DESCRIPTION,
                                              children: eo.intl.string(eo.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(et.Z, { className: ec.defaultImageView }) : (0, i.jsx)(en.Z, { className: ec.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) })
                      ]
                  })
                : null,
            z = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: eo.intl.string(eo.t.gePre3),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: eo.intl.string(eo.t.ElZtzs),
                                              value: c.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: eo.intl.string(eo.t.w28f3N),
                                              value: c.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: ed.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: eo.intl.string(eo.t['165cVV'])
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) })
                      ]
                  })
                : null,
            X = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.xJW, {
                              children: (0, i.jsx)(g.hjN, {
                                  title: eo.intl.string(eo.t.Paxaur),
                                  children: (0, i.jsx)(g.q4e, {
                                      options: [
                                          {
                                              label: eo.intl.string(eo.t.rQ0ctb),
                                              value: o.z.MATCH_SOME
                                          },
                                          {
                                              label: eo.intl.string(eo.t.FCXUu7),
                                              value: o.z.MATCH_ALL
                                          }
                                      ],
                                      value: e.getDefaultTagSetting(),
                                      onChange: this.handleChangeDefaultTagSetting
                                  })
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: ed.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: eo.intl.string(eo.t.DqOl8P)
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) })
                      ]
                  })
                : null,
            J = R ? C : b,
            q = U.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(g.xJW, {
                              children: [
                                  (0, i.jsx)(g.vwX, {
                                      id: ex,
                                      className: ed.marginBottom8,
                                      children: eo.intl.string(eo.t['tTHx9/'])
                                  }),
                                  I
                                      ? (0, i.jsx)(g.vwX, {
                                            className: ed.marginTop20,
                                            children: eo.intl.string(eo.t.O1c02t)
                                        })
                                      : null,
                                  !0 === Z
                                      ? (0, i.jsx)(ee.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(g.iRW, {
                                            className: ed.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: ei.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !J,
                                            equidistant: !0,
                                            'aria-labelledby': ex,
                                            'aria-describedby': ej
                                        }),
                                  (0, i.jsx)(g.R94, {
                                      id: ej,
                                      type: g.R94.Types.DESCRIPTION,
                                      children: I ? eo.intl.string(eo.t['a+1pdH']) : R ? eo.intl.string(eo.t.OMmNCg) : eo.intl.string(eo.t['HEA/DQ'])
                                  }),
                                  I
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(g.vwX, {
                                                    className: ed.marginTop20,
                                                    children: eo.intl.string(eo.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(g.iRW, {
                                                    className: ed.marginTop20,
                                                    initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
                                                    markers: ei.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !J,
                                                    equidistant: !0,
                                                    'aria-labelledby': ex,
                                                    'aria-describedby': ej
                                                }),
                                                (0, i.jsx)(g.R94, {
                                                    type: g.R94.Types.DESCRIPTION,
                                                    children: eo.intl.string(eo.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) })
                      ]
                  })
                : null,
            $ =
                R && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  children: (0, i.jsx)(x.Z, {
                                      page: ei.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(B.Z, {
                                          isDisabled: !N,
                                          autoArchiveDuration: null != (p = e.threadMetadata.autoArchiveDuration) ? p : ea.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(g.R94, {
                                  className: ed.marginTop8,
                                  type: g.R94.Types.DESCRIPTION,
                                  children: T ? eo.intl.string(eo.t['3aJN9P']) : eo.intl.string(eo.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            K =
                e.type === ei.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: eo.intl.string(eo.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !N,
                              children: eo.intl.string(eo.t.s2rpNT)
                          })
                      })
                    : null,
            er = null != E && (0, W.Y2)(E),
            eu = U.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(g.j7V, {
                          note: eo.intl.string(eo.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: (0, y.aC)(e),
                          hideBorder: !0,
                          disabled: !b || null != e.linkedLobby || er,
                          disabledText: null != e.linkedLobby ? eo.intl.string(eo.t.l6uSVV) : null,
                          children: eo.intl.string(eo.t.Es25YW)
                      })
                  })
                : null,
            eb =
                U.Y0.has(e.type) && null != E && E.features.has(ei.oNc.NEWS) && e.id !== (null == E ? void 0 : E.rulesChannelId) && e.id !== (null == E ? void 0 : E.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(g.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { children: eo.intl.format(eo.t.tI7KNT, { documentationLink: Q.Z.getArticleURL(ei.BhN.ANNOUNCEMENT_CHANNELS) }) }),
                                      (0, i.jsx)('div', {
                                          className: ed.marginTop8,
                                          children: eo.intl.string(eo.t['2Ab4IS'])
                                      })
                                  ]
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === ei.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !b,
                              children: eo.intl.string(eo.t.Au2b7u)
                          })
                      })
                    : null,
            ev = U.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) }),
                          (0, i.jsx)(x.Z, {
                              page: ei.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(B.Z, {
                                  isDisabled: !b,
                                  autoArchiveDuration: (0, D.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(g.R94, {
                              className: ed.marginTop8,
                              type: g.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? eo.intl.string(eo.t.fyXclZ) : eo.intl.string(eo.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            ey = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(g.j7V, {
                      note: eo.intl.format(eo.t.feJW19, { helpdeskArticle: Q.Z.getArticleURL(ei.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(el.zZ.SUMMARIES_DISABLED) && (null == E ? void 0 : E.features.has(ei.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !b || !(null == E ? void 0 : E.features.has(ei.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: ec.badgedItem,
                          children: [
                              eo.intl.string(eo.t.id3ozs),
                              (0, i.jsx)(g.IGR, {
                                  text: eo.intl.string(eo.t.oW0eUV),
                                  color: u.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            eC = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) }),
                          (0, i.jsx)(g.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(el.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: eo.intl.string(eo.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !b,
                              children: eo.intl.string(eo.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === ei.d4z.GUILD_CATEGORY ? ((j = eo.intl.string(eo.t.OCAkGB)), (f = 'category-name')) : e.isForumPost() ? ((j = eo.intl.string(eo.t.uyVrTE)), (f = 'post-title')) : R ? ((j = eo.intl.string(eo.t.j3XWjI)), (f = 'thread-name')) : ((j = eo.intl.string(eo.t.PVbHDg)), (f = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(g.xJW, {
                        title: j,
                        children: this.props.isEmojiInChannelNamesEnabled
                            ? (0, i.jsxs)('div', {
                                  className: ec.nameInput,
                                  children: [
                                      (0, i.jsx)(g.oil, {
                                          inputRef: this.nameInputRef,
                                          value: t,
                                          onChange: this.handleChangeName,
                                          onBlur: this.handleBlurName,
                                          error: this.getError('name'),
                                          name: f,
                                          autoFocus: !0,
                                          disabled: w ? !v : !b,
                                          maxLength: ei.HN8,
                                          className: ec.nameInputWrapperWithEmojiPicker,
                                          inputClassName: ec.nameInputInnerWithEmojiPicker,
                                          focusProps: { offset: { right: -30 } }
                                      }),
                                      (0, i.jsx)(eR, {
                                          onEmojiPicked: this.insertEmojiAtPosition,
                                          channel: e,
                                          guildId: null == e ? void 0 : e.guild_id
                                      })
                                  ]
                              })
                            : (0, i.jsx)(g.oil, {
                                  inputRef: this.nameInputRef,
                                  value: t,
                                  onChange: this.handleChangeName,
                                  onBlur: this.handleBlurName,
                                  error: this.getError('name'),
                                  name: f,
                                  autoFocus: !0,
                                  disabled: w ? !v : !b,
                                  maxLength: ei.HN8
                              })
                    }),
                    (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) }),
                    k,
                    V,
                    H,
                    G,
                    q,
                    $,
                    F,
                    z,
                    X,
                    K,
                    eu,
                    eb,
                    ey,
                    ev,
                    eC
                ]
            })
        );
    }
    renderBitrate(e) {
        return ''.concat(Math.round(e / 1000), 'kbps');
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = (0, J.g7)(t, e),
            r = this.getError('bitrate');
        return (0, i.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: ed.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: eb,
                    children: eo.intl.string(eo.t.w2d0vb)
                }),
                '' !== r &&
                    (0, i.jsx)(g.R94, {
                        id: ev,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: ed.marginBottom8,
                        children: r
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [ei.Fc, ei.epw, l],
                    minValue: ei.Fc,
                    maxValue: l,
                    keyboardStep: ei.V7H,
                    disabled: !n,
                    'aria-labelledby': eb,
                    'aria-describedby': null != r && '' !== r ? ev : ey
                }),
                l > ei.epw
                    ? (0, i.jsx)(g.R94, {
                          id: ey,
                          type: g.geA.DESCRIPTION,
                          children: eo.intl.format(eo.t.SbQJk5, { bitrate: ei.epw / 1000 })
                      })
                    : null
            ]
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            U.vg.has(e.type) &&
            (e.isGuildVocal() ||
                M.tM.getCurrentConfig({
                    guildId: e.guild_id,
                    location: '9b50bd_1'
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = [
            {
                value: ei.Ucd.AUTO,
                name: eo.intl.string(eo.t.jjKYpq)
            },
            {
                value: ei.Ucd.FULL,
                name: eo.intl.string(eo.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: ed.marginBottom40,
            children: [
                (0, i.jsx)(g.xJW, {
                    title: eo.intl.string(eo.t.jhJEJi),
                    children: (0, i.jsx)(g.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null != (t = e.videoQualityMode) ? t : ei.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: eo.intl.format(eo.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? eo.intl.string(eo.t.XX5ciY) : eo.intl.formatToPlainString(eo.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? ei.xGv : ei.$pe;
        return (0, i.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: ed.marginBottom40,
            children: [
                (0, i.jsx)(g.vwX, {
                    id: eC,
                    children: eo.intl.string(eo.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(g.R94, {
                        id: eN,
                        type: g.geA.DESCRIPTION,
                        style: { color: u.Z.unsafe_rawColors.RED_400.css },
                        className: ed.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(g.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    'aria-labelledby': eC,
                    'aria-describedby': null != n && '' !== n ? eN : eS
                }),
                (0, i.jsx)(g.R94, {
                    id: eS,
                    type: g.geA.DESCRIPTION,
                    children: eo.intl.format(e.isGuildStageVoice() ? eo.t.OqZI8P : eo.t['8yb3JS'], {})
                })
            ]
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: l, guild: r } = this.props;
        if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != n &&
            (s = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e.id
                }))).unshift({
                label: eo.intl.string(eo.t.JEmsam),
                value: ew
            });
        let a = null != (t = e.rtcRegion) ? t : ew;
        return (0, i.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(g.vwX, { children: eo.intl.string(eo.t.Ms8bX1) }),
                (0, i.jsx)(g.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(g.R94, {
                    type: g.geA.DESCRIPTION,
                    children: eo.intl.string(eo.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t = e.type === ei.d4z.GUILD_CATEGORY ? ((0, h.wj)(l) ? n(309095) : n(925442)) : (0, h.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(T.Z, {
                justify: T.Z.Justify.CENTER,
                className: ed.marginTop60,
                children: (0, i.jsx)('img', {
                    alt: '',
                    width: 280,
                    height: 165,
                    src: t
                })
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, i.jsxs)(g.hjN, {
                  className: 'channel-settings-overview',
                  tag: g.RB0.H1,
                  title: eo.intl.string(eo.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(g.$i$, { className: s()(ed.marginTop40, ed.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
              });
    }
    handleSubmit() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0
            });
        });
    }
    constructor(e) {
        var t, n;
        (super(e),
            eu(this, 'defaultReactionButtonRef', l.createRef()),
            eu(this, 'nameInputRef', l.createRef()),
            eu(this, 'cursorPosition', 0),
            eu(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(R.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (this.handleChangeDefaultReactionEmoji(n), i && t());
                    },
                    pickerIntention: er.Hz.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: eO
                });
            }),
            eu(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, $.mB)(t.flags, el.zZ.REQUIRE_TAG, e);
                (0, p.pW)({ flags: n });
            }),
            eu(this, 'handleChangeName', (e) => {
                var t, n;
                let { channel: i } = this.props;
                if (null == i) return;
                i.isThread() ? (e = (0, k.Z)(e, !1)) : ei.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, J.Nj)(e));
                let l = null != (n = null == (t = this.nameInputRef.current) ? void 0 : t.selectionStart) ? n : 0;
                ((0, p.pW)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l);
                    }, 0));
            }),
            eu(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, k.Z)(t, !0);
                    e !== t && (0, p.pW)({ name: e });
                }
            }),
            eu(this, 'insertEmojiAtPosition', (e) => {
                var t, n;
                let i = this.nameInputRef.current,
                    l = null != (t = null == i ? void 0 : i.selectionStart) ? t : 0,
                    r = null != (n = null == i ? void 0 : i.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, l)) + e + (null == s ? void 0 : s.substring(r));
                ((0, p.pW)({ name: a }),
                    setTimeout(() => {
                        let t = l + e.length;
                        (null == i || i.focus(), null == i || i.setSelectionRange(t, t));
                    }, 0));
            }),
            eu(this, 'handleChangeTopic', (e) => {
                (0, p.pW)({ topic: _.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eu(this, 'handleChangeRichTopic', (e, t, n) => {
                (this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t));
            }),
            eu(this, 'handleChangeTemplate', (e) => {
                (0, p.pW)({ template: _.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            eu(this, 'handleChangeDefaultReactionEmoji', (e) => {
                let t =
                    null == e
                        ? null
                        : (null == e ? void 0 : e.id) != null
                          ? {
                                emojiId: e.id,
                                emojiName: void 0
                            }
                          : {
                                emojiId: void 0,
                                emojiName: e.optionallyDiverseSequence
                            };
                (0, p.pW)({ defaultReactionEmoji: t });
            }),
            eu(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                ((0, p.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e));
            }),
            eu(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, p.pW)({ defaultSortOrder: e });
            }),
            eu(this, 'handleChangeDefaultTagSetting', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, p.pW)({ defaultTagSetting: e });
            }),
            eu(this, 'handleChangeBitrate', (e) => {
                (0, p.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            eu(this, 'handleUserLimitChange', (e) => {
                (0, p.pW)({ userLimit: Math.round(e) });
            }),
            eu(this, 'handleNSFWChange', (e) => {
                (0, p.pW)({ nsfw: e });
            }),
            eu(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, $.mB)(t.flags, el.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, p.pW)({ flags: n });
            }),
            eu(this, 'handleNewsChange', (e) => {
                (0, p.pW)({ type: e ? ei.d4z.GUILD_ANNOUNCEMENT : ei.d4z.GUILD_TEXT });
            }),
            eu(this, 'handleChangeSlowmode', (e) => {
                (0, p.pW)({ rateLimitPerUser: e });
            }),
            eu(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, p.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            eu(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, p.pW)({ defaultAutoArchiveDuration: e });
            }),
            eu(this, 'handleRegionChange', (e) => {
                (0, p.pW)({ rtcRegion: e === ew ? null : e });
            }),
            eu(this, 'handleVideoQualityModeChange', (e) => {
                (0, p.pW)({ videoQualityMode: e });
            }),
            eu(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, p.pW)({ autoArchiveDuration: e });
            }),
            eu(this, 'handleInvitableChanged', (e) => {
                (0, p.pW)({ invitable: e });
            }),
            eu(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, $.mB)(t.flags, el.zZ.SUMMARIES_DISABLED, !e);
                (0, p.pW)({ flags: n });
            }),
            eu(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, $.mB)(t.flags, el.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, p.pW)({ flags: n });
            }));
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : '';
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, E.JM)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1
        };
    }
}
function e_() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, d.cj)([G.Z], () => G.Z.getProps()),
        s = (0, d.e7)([X.Z], () => {
            var e;
            return X.Z.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, d.e7)([V.Z], () => V.Z.theme),
        o = (0, d.e7)([F.Z], () => F.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, M.C7)(t),
        u = (0, M.Xb)(t),
        { canManageChannels: h, canSendMessages: m } = (0, d.cj)([z.Z], () => ({
            canManageChannels: z.Z.can(ei.Plq.MANAGE_CHANNELS, t),
            canSendMessages: z.Z.can(ei.Plq.SEND_MESSAGES, t)
        })),
        g = (0, N.ZP)(t),
        p = H.default.getId(),
        f = (0, P.v)(),
        x = null == t ? void 0 : t.id,
        j = (0, v.ts)(t, !1, !0),
        y = b.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        S = (0, C.s)({
            guildId: null == o ? void 0 : o.id,
            location: 'ChannelSettingsOverview'
        }),
        E = l.useCallback(
            (e) => {
                null != x && f.getState().setLayoutType(x, e);
            },
            [x, f]
        );
    return (0, i.jsx)(eI, {
        errors: e,
        channel: t,
        channelName: g,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
        canSendMessages: m,
        isThreadModerator: u,
        canManageThread: c,
        subsection: r,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: E,
        showChannelSummariesSettings: j,
        showAdvancedSlowModeSetting: y,
        isEmojiInChannelNamesEnabled: S
    });
}
