n.d(t, {
    G: () => eb,
    Z: () => ey
}),
    n(997841),
    n(953529),
    n(290780);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(313361);
n(697988);
var o = n(683860),
    c = n(442837),
    d = n(692547),
    u = n(780384),
    h = n(481060),
    g = n(787014),
    m = n(771340),
    p = n(410575),
    f = n(852860),
    x = n(129865),
    j = n(902840),
    b = n(933557),
    v = n(541716),
    y = n(752305),
    C = n(893718),
    N = n(600164),
    S = n(313201),
    w = n(907040),
    Z = n(633302),
    O = n(109434),
    E = n(162389),
    T = n(946458),
    R = n(600553),
    _ = n(968437),
    I = n(665906),
    P = n(456077),
    D = n(747212),
    L = n(210887),
    A = n(131704),
    M = n(314897),
    k = n(388610),
    B = n(430824),
    V = n(496675),
    G = n(903223),
    U = n(594174),
    W = n(934415),
    H = n(70956),
    z = n(630388),
    F = n(63063),
    X = n(129724),
    J = n(732335),
    q = n(296146),
    Q = n(564735),
    $ = n(981631),
    Y = n(176505),
    K = n(185923),
    ee = n(710352),
    et = n(124368),
    en = n(388032),
    ei = n(194512),
    el = n(20493);
function er(e, t, n) {
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
let es = (0, S.hQ)(),
    ea = (0, S.hQ)(),
    eo = (0, S.hQ)(),
    ec = (0, S.hQ)(),
    ed = (0, S.hQ)(),
    eu = (0, S.hQ)(),
    eh = (0, S.hQ)(),
    eg = (0, S.hQ)(),
    em = (0, S.hQ)(),
    ep = (0, S.hQ)(),
    ef = (0, S.hQ)(),
    ex = (0, A.kt)({
        id: '1',
        type: $.d4z.DM
    }),
    ej = 'AUTOMATIC_RTC_REGION',
    eb = c.ZP.connectStores([k.Z], () => {
        let { channel: e, submitting: t } = k.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, g.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: r, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: m, videoQualityMode: p, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b, defaultTagSetting: v } = e;
                e.isThread() && (t = (0, P.Z)(t, !0)),
                    (0, g.wk)(e.id, {
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
                        videoQualityMode: p,
                        defaultReactionEmoji: f,
                        availableTags: x,
                        defaultSortOrder: j,
                        defaultForumLayout: b,
                        defaultTagSetting: v
                    });
            }
        };
    })(f.Z);
class ev extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && m.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let r = null != (i = null == (t = this.props.channel) ? void 0 : t.topic) ? i : '';
        (null != (l = null == (n = e.channel) ? void 0 : n.topic) ? l : '') !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, y.JM)(r)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, X.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, X.A)(e * H.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, r, c, u, g;
        let m,
            f,
            { canManageChannels: x, canSendMessages: j, isThreadModerator: b, canManageThread: y, guild: N, isForumPost: S, isOwner: w, showAdvancedSlowModeSetting: O, settingsRevampEnabled: R } = this.props,
            I = A.Ec.has(e.type),
            P = e.isForumLikeChannel(),
            L = P && (null == (n = e.availableTags) ? void 0 : n.every((e) => e.moderated)),
            M = (null == (l = U.default.getCurrentUser()) ? void 0 : l.isStaff()) === !0,
            k = A.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.xJW, {
                              title: P ? en.intl.string(en.t.yR6Hwc) : en.intl.string(en.t.X8jMDg),
                              className: el.marginTop20,
                              children: P
                                  ? (0, i.jsx)(C.Z, {
                                        innerClassName: ei.forumGuidelines,
                                        characterCountClassName: ei.forumGuidelinesCharacterCount,
                                        maxCharacterCount: Y.Z7,
                                        onChange: this.handleChangeRichTopic,
                                        placeholder: en.intl.string(en.t['71fbmp']),
                                        channel: ex,
                                        textValue: this.state.textTopicValue,
                                        richValue: this.state.richTopicValue,
                                        type: v.Ie.FORUM_CHANNEL_GUIDELINES,
                                        onBlur: () => {
                                            this.setState({ topicFocused: !1 });
                                        },
                                        onFocus: () => {
                                            this.setState({ topicFocused: !0 });
                                        },
                                        focused: this.state.topicFocused,
                                        onSubmit: this.handleSubmit,
                                        disableThemedBackground: !0
                                    })
                                  : (0, i.jsx)(h.Kx8, {
                                        autoFocus: this.props.subsection === $.ZfP.TOPIC,
                                        placeholder: en.intl.string(en.t['71fbmp']),
                                        value: Z.ZP.translateSurrogatesToInlineEmoji(e.topic),
                                        onChange: this.handleChangeTopic,
                                        error: this.getError('topic'),
                                        maxLength: Y.$x,
                                        disabled: !x,
                                        autosize: !0
                                    })
                          }),
                          (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            B =
                P && M
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(h.xJW, {
                                  title: en.intl.string(en.t.qk2jdX),
                                  className: el.marginTop20,
                                  children: (0, i.jsx)(h.Kx8, {
                                      placeholder: en.intl.string(en.t.DDjD1N),
                                      value: Z.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: ee.Vb,
                                      disabled: !x,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                          ]
                      })
                    : null,
            V = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(h.xJW, {
                              children: [
                                  (0, i.jsx)(h.vwX, {
                                      error: this.getError('available_tags'),
                                      id: es,
                                      className: ei.formTitle,
                                      children: en.intl.string(en.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(h.R94, {
                                      id: ea,
                                      type: h.R94.Types.DESCRIPTION,
                                      className: ei.description,
                                      children: en.intl.string(en.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(E.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(h.XZJ, {
                              disabled: !x || L,
                              value: e.hasFlag(Y.zZ.REQUIRE_TAG),
                              type: h.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  children: en.intl.string(en.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: ei.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(h.xJW, {
                                      className: s()(ei.settingsLeft, ei.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(h.vwX, {
                                              id: eo,
                                              className: ei.formTitle,
                                              children: en.intl.string(en.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(h.R94, {
                                              id: ea,
                                              type: h.R94.Types.DESCRIPTION,
                                              className: ei.description,
                                              children: en.intl.string(en.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: ei.buttonRow,
                                              children: [
                                                  (0, i.jsx)(h.yRy, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: h.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) => {
                                                          var t, n;
                                                          return (0, i.jsx)(
                                                              h.zxk,
                                                              ((t = (function (e) {
                                                                  for (var t = 1; t < arguments.length; t++) {
                                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                                          i = Object.keys(n);
                                                                      'function' == typeof Object.getOwnPropertySymbols &&
                                                                          (i = i.concat(
                                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                              })
                                                                          )),
                                                                          i.forEach(function (t) {
                                                                              er(e, t, n[t]);
                                                                          });
                                                                  }
                                                                  return e;
                                                              })({}, e)),
                                                              (n = n =
                                                                  {
                                                                      buttonRef: this.defaultReactionButtonRef,
                                                                      disabled: !x,
                                                                      onClick: (t) => {
                                                                          var n;
                                                                          null == (n = e.onClick) || n.call(e, t);
                                                                      },
                                                                      children: en.intl.string(en.t['59QgaG'])
                                                                  }),
                                                              Object.getOwnPropertyDescriptors
                                                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                  : (function (e, t) {
                                                                        var n = Object.keys(e);
                                                                        if (Object.getOwnPropertySymbols) {
                                                                            var i = Object.getOwnPropertySymbols(e);
                                                                            n.push.apply(n, i);
                                                                        }
                                                                        return n;
                                                                    })(Object(n)).forEach(function (e) {
                                                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                    }),
                                                              t)
                                                          );
                                                      }
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(h.zxk, {
                                                            className: ei.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: h.zxk.Sizes.MIN,
                                                            look: h.zxk.Looks.LINK,
                                                            color: h.zxk.Colors.RED,
                                                            children: en.intl.string(en.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(T.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            W = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: ei.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(h.xJW, {
                                      className: s()(ei.settingsLeft, ei.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(h.hjN, {
                                              title: en.intl.string(en.t.kQvoCw),
                                              children: (0, i.jsx)(h.q4e, {
                                                  options: [
                                                      {
                                                          label: en.intl.string(en.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: en.intl.string(en.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null != (c = e.defaultForumLayout) ? c : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(h.R94, {
                                              className: el.marginTop8,
                                              type: h.R94.Types.DESCRIPTION,
                                              children: en.intl.string(en.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(q.Z, { className: ei.defaultImageView }) : (0, i.jsx)(Q.Z, { className: ei.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            H = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.xJW, {
                              children: (0, i.jsx)(h.hjN, {
                                  title: en.intl.string(en.t.gePre3),
                                  children: (0, i.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: en.intl.string(en.t.ElZtzs),
                                              value: o.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: en.intl.string(en.t.w28f3N),
                                              value: o.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(h.R94, {
                              className: el.marginTop8,
                              type: h.R94.Types.DESCRIPTION,
                              children: en.intl.string(en.t['165cVV'])
                          }),
                          (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            z = I ? b : x,
            X = A.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(h.xJW, {
                              children: [
                                  (0, i.jsx)(h.vwX, {
                                      id: ec,
                                      className: el.marginBottom8,
                                      children: en.intl.string(en.t['tTHx9/'])
                                  }),
                                  P
                                      ? (0, i.jsx)(h.vwX, {
                                            className: el.marginTop20,
                                            children: en.intl.string(en.t.O1c02t)
                                        })
                                      : null,
                                  !0 === O
                                      ? (0, i.jsx)(J.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(h.iRW, {
                                            className: el.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: $.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !z,
                                            equidistant: !0,
                                            'aria-labelledby': ec,
                                            'aria-describedby': ed
                                        }),
                                  (0, i.jsx)(h.R94, {
                                      id: ed,
                                      type: h.R94.Types.DESCRIPTION,
                                      children: P ? en.intl.string(en.t['a+1pdH']) : I ? en.intl.string(en.t.OMmNCg) : en.intl.string(en.t['HEA/DQ'])
                                  }),
                                  P
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(h.vwX, {
                                                    className: el.marginTop20,
                                                    children: en.intl.string(en.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(h.iRW, {
                                                    className: el.marginTop20,
                                                    initialValue: null != (u = e.defaultThreadRateLimitPerUser) ? u : 0,
                                                    markers: $.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !z,
                                                    equidistant: !0,
                                                    'aria-labelledby': ec,
                                                    'aria-describedby': ed
                                                }),
                                                (0, i.jsx)(h.R94, {
                                                    type: h.R94.Types.DESCRIPTION,
                                                    children: en.intl.string(en.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) })
                      ]
                  })
                : null,
            K =
                I && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(h.xJW, {
                                  children: (0, i.jsx)(p.Z, {
                                      page: $.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(D.Z, {
                                          isDisabled: !y,
                                          autoArchiveDuration: null != (g = e.threadMetadata.autoArchiveDuration) ? g : et.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, i.jsx)(h.R94, {
                                  className: el.marginTop8,
                                  type: h.R94.Types.DESCRIPTION,
                                  children: S ? en.intl.string(en.t['3aJN9P']) : en.intl.string(en.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            eu =
                e.type === $.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(h.j7V, {
                              note: en.intl.string(en.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !y,
                              children: en.intl.string(en.t.s2rpNT)
                          })
                      })
                    : null,
            eh = A.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(h.j7V, {
                          note: en.intl.string(en.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !x || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? en.intl.string(en.t.l6uSVV) : null,
                          children: en.intl.string(en.t.Es25YW)
                      })
                  })
                : null,
            eg =
                A.Y0.has(e.type) && null != N && N.hasFeature($.oNc.NEWS) && e.id !== (null == N ? void 0 : N.rulesChannelId) && e.id !== (null == N ? void 0 : N.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(h.j7V, {
                              note: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { children: en.intl.format(en.t.tI7KNT, { documentationLink: F.Z.getArticleURL($.BhN.ANNOUNCEMENT_CHANNELS) }) }),
                                      (0, i.jsx)('div', {
                                          className: el.marginTop8,
                                          children: R ? en.intl.string(en.t['2Ab4IS']) : en.intl.string(en.t['/8VkyM'])
                                      })
                                  ]
                              }),
                              onChange: this.handleNewsChange,
                              value: e.type === $.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !x,
                              children: en.intl.string(en.t.Au2b7u)
                          })
                      })
                    : null,
            em = A.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                          (0, i.jsx)(p.Z, {
                              page: $.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(D.Z, {
                                  isDisabled: !x,
                                  autoArchiveDuration: (0, _.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, i.jsx)(h.R94, {
                              className: el.marginTop8,
                              type: h.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? en.intl.string(en.t.fyXclZ) : en.intl.string(en.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            ep = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(h.j7V, {
                      note: en.intl.format(en.t.feJW19, { helpdeskArticle: F.Z.getArticleURL($.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(Y.zZ.SUMMARIES_DISABLED) && (null == N ? void 0 : N.hasFeature($.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !x || !(null == N ? void 0 : N.hasFeature($.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: ei.badgedItem,
                          children: [
                              en.intl.string(en.t.id3ozs),
                              (0, i.jsx)(h.IGR, {
                                  text: en.intl.string(en.t.oW0eUV),
                                  color: d.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            ef = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                          (0, i.jsx)(h.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(Y.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: en.intl.string(en.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !x,
                              children: en.intl.string(en.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === $.d4z.GUILD_CATEGORY ? ((f = en.intl.string(en.t.OCAkGB)), (m = 'category-name')) : e.isForumPost() ? ((f = en.intl.string(en.t.uyVrTE)), (m = 'post-title')) : I ? ((f = en.intl.string(en.t.j3XWjI)), (m = 'thread-name')) : ((f = en.intl.string(en.t.PVbHDg)), (m = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(h.xJW, {
                        title: f,
                        children: (0, i.jsx)(h.oil, {
                            value: t,
                            onChange: this.handleChangeName,
                            onBlur: this.handleBlurName,
                            error: this.getError('name'),
                            name: m,
                            autoFocus: !0,
                            disabled: w ? !j : !x,
                            maxLength: $.HN8
                        })
                    }),
                    (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) }),
                    k,
                    B,
                    V,
                    G,
                    X,
                    K,
                    W,
                    H,
                    null,
                    eu,
                    eh,
                    eg,
                    ep,
                    em,
                    ef
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
        let l = (0, W.g7)(t, e),
            r = this.getError('bitrate');
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(h.vwX, {
                    id: eu,
                    children: en.intl.string(en.t.w2d0vb)
                }),
                '' !== r &&
                    (0, i.jsx)(h.R94, {
                        id: eh,
                        type: h.geA.DESCRIPTION,
                        style: { color: d.Z.unsafe_rawColors.RED_400.css },
                        className: el.marginBottom8,
                        children: r
                    }),
                (0, i.jsx)(h.iRW, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [$.Fc, $.epw, l],
                    minValue: $.Fc,
                    maxValue: l,
                    keyboardStep: $.V7H,
                    disabled: !n,
                    'aria-labelledby': eu,
                    'aria-describedby': null != r && '' !== r ? eh : eg
                }),
                l > $.epw
                    ? (0, i.jsx)(h.R94, {
                          id: eg,
                          type: h.geA.DESCRIPTION,
                          children: en.intl.format(en.t.SbQJk5, { bitrate: $.epw / 1000 })
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
            A.vg.has(e.type) &&
            (e.isGuildVocal() ||
                I.tM.getCurrentConfig({
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
                value: $.Ucd.AUTO,
                name: en.intl.string(en.t.jjKYpq)
            },
            {
                value: $.Ucd.FULL,
                name: en.intl.string(en.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(h.xJW, {
                    title: en.intl.string(en.t.jhJEJi),
                    children: (0, i.jsx)(h.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null != (t = e.videoQualityMode) ? t : $.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(h.R94, {
                    type: h.geA.DESCRIPTION,
                    children: en.intl.format(en.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? en.intl.string(en.t.XX5ciY) : en.intl.formatToPlainString(en.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? $.xGv : $.$pe;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: el.marginBottom40,
            children: [
                (0, i.jsx)(h.vwX, {
                    id: em,
                    children: en.intl.string(en.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(h.R94, {
                        id: ep,
                        type: h.geA.DESCRIPTION,
                        style: { color: d.Z.unsafe_rawColors.RED_400.css },
                        className: el.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(h.iRW, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    'aria-labelledby': em,
                    'aria-describedby': null != n && '' !== n ? ep : ef
                }),
                (0, i.jsx)(h.R94, {
                    id: ef,
                    type: h.geA.DESCRIPTION,
                    children: en.intl.format(e.isGuildStageVoice() ? en.t.OqZI8P : en.t['8yb3JS'], {})
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
                label: en.intl.string(en.t.JEmsam),
                value: ej
            });
        let a = null != (t = e.rtcRegion) ? t : ej;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(h.vwX, { children: en.intl.string(en.t.Ms8bX1) }),
                (0, i.jsx)(h.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(h.R94, {
                    type: h.geA.DESCRIPTION,
                    children: en.intl.string(en.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: l } = this.props;
        return (
            (t = e.type === $.d4z.GUILD_CATEGORY ? ((0, u.wj)(l) ? n(309095) : n(925442)) : (0, u.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(N.Z, {
                justify: N.Z.Justify.CENTER,
                className: el.marginTop60,
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
            : (0, i.jsxs)(h.hjN, {
                  className: 'channel-settings-overview',
                  tag: h.RB0.H1,
                  title: en.intl.string(en.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(h.$i$, { className: s()(el.marginTop40, el.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
        super(e),
            er(this, 'defaultReactionButtonRef', l.createRef()),
            er(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, i.jsx)(w.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleChangeDefaultReactionEmoji(e), n && t();
                    },
                    pickerIntention: K.Hz.COMMUNITY_CONTENT,
                    channel: n
                });
            }),
            er(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, z.mB)(t.flags, Y.zZ.REQUIRE_TAG, e);
                (0, g.pW)({ flags: n });
            }),
            er(this, 'handleChangeName', (e) => {
                let { channel: t } = this.props;
                null != t && (t.isThread() ? (e = (0, P.Z)(e, !1)) : $.TPd.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, W.Nj)(e)), (0, g.pW)({ name: e }));
            }),
            er(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, P.Z)(t, !0);
                    e !== t && (0, g.pW)({ name: e });
                }
            }),
            er(this, 'handleChangeTopic', (e) => {
                (0, g.pW)({ topic: Z.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            er(this, 'handleChangeRichTopic', (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t);
            }),
            er(this, 'handleChangeTemplate', (e) => {
                (0, g.pW)({ template: Z.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            er(this, 'handleChangeDefaultReactionEmoji', (e) => {
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
                (0, g.pW)({ defaultReactionEmoji: t });
            }),
            er(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, g.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            er(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, g.pW)({ defaultSortOrder: e });
            }),
            er(this, 'handleChangeDefaultTagSetting', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, g.pW)({ defaultTagSetting: e });
            }),
            er(this, 'handleChangeBitrate', (e) => {
                (0, g.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            er(this, 'handleUserLimitChange', (e) => {
                (0, g.pW)({ userLimit: Math.round(e) });
            }),
            er(this, 'handleNSFWChange', (e) => {
                (0, g.pW)({ nsfw: e });
            }),
            er(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, z.mB)(t.flags, Y.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, g.pW)({ flags: n });
            }),
            er(this, 'handleNewsChange', (e) => {
                (0, g.pW)({ type: e ? $.d4z.GUILD_ANNOUNCEMENT : $.d4z.GUILD_TEXT });
            }),
            er(this, 'handleChangeSlowmode', (e) => {
                (0, g.pW)({ rateLimitPerUser: e });
            }),
            er(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, g.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            er(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, g.pW)({ defaultAutoArchiveDuration: e });
            }),
            er(this, 'handleRegionChange', (e) => {
                (0, g.pW)({ rtcRegion: e === ej ? null : e });
            }),
            er(this, 'handleVideoQualityModeChange', (e) => {
                (0, g.pW)({ videoQualityMode: e });
            }),
            er(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, g.pW)({ autoArchiveDuration: e });
            }),
            er(this, 'handleInvitableChanged', (e) => {
                (0, g.pW)({ invitable: e });
            }),
            er(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, z.mB)(t.flags, Y.zZ.SUMMARIES_DISABLED, !e);
                (0, g.pW)({ flags: n });
            }),
            er(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, z.mB)(t.flags, Y.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, g.pW)({ flags: n });
            });
        let r = null != (n = null == (t = this.props.channel) ? void 0 : t.topic) ? n : '';
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, y.JM)(r),
            topicFocused: !1
        };
    }
}
function ey() {
    var e;
    let { errors: t, channel: n, submitting: r, subsection: s } = (0, c.cj)([k.Z], () => k.Z.getProps()),
        a = (0, c.e7)([G.Z], () => {
            var e;
            return G.Z.getRegions(null != (e = null == n ? void 0 : n.getGuildId()) ? e : null);
        }),
        o = (0, c.e7)([L.Z], () => L.Z.theme),
        d = (0, c.e7)([B.Z], () => B.Z.getGuild(null == n ? void 0 : n.getGuildId())),
        u = (0, I.C7)(n),
        h = (0, I.Xb)(n),
        { canManageChannels: g, canSendMessages: m } = (0, c.cj)([V.Z], () => ({
            canManageChannels: V.Z.can($.Plq.MANAGE_CHANNELS, n),
            canSendMessages: V.Z.can($.Plq.SEND_MESSAGES, n)
        })),
        p = (0, b.ZP)(n),
        f = M.default.getId(),
        v = (0, O.v)(),
        y = null == n ? void 0 : n.id,
        C = (0, j.ts)(n, !1, !0),
        N = x.Z.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        S = l.useCallback(
            (e) => {
                null != y && v.getState().setLayoutType(y, e);
            },
            [y, v]
        ),
        w = (0, R.Dj)({
            guildId: null != (e = null == n ? void 0 : n.guild_id) ? e : void 0,
            location: 'guild settings overview'
        });
    return (0, i.jsx)(ev, {
        errors: t,
        channel: n,
        channelName: p,
        submitting: r,
        regions: a,
        theme: o,
        guild: d,
        canManageChannels: (null == n ? void 0 : n.isThread()) ? u : g,
        canSendMessages: m,
        isThreadModerator: h,
        canManageThread: u,
        subsection: s,
        isForumPost: null != n && n.isForumPost(),
        isOwner: null == n ? void 0 : n.isOwner(f),
        handleSetDefaultLayout: S,
        showChannelSummariesSettings: C,
        showAdvancedSlowModeSetting: N,
        settingsRevampEnabled: w
    });
}
