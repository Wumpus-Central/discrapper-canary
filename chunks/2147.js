n.d(t, {
    G: () => ej,
    Z: () => eN
}),
    n(789020),
    n(266796),
    n(733860);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(313361),
    o = n(683860),
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
    N = n(541716),
    v = n(752305),
    y = n(893718),
    C = n(600164),
    S = n(313201),
    Z = n(907040),
    w = n(633302),
    O = n(109434),
    E = n(162389),
    T = n(946458),
    R = n(968437),
    _ = n(665906),
    I = n(456077),
    P = n(747212),
    W = n(210887),
    L = n(131704),
    D = n(314897),
    A = n(388610),
    M = n(430824),
    k = n(496675),
    B = n(903223),
    V = n(594174),
    G = n(934415),
    U = n(70956),
    H = n(630388),
    z = n(63063),
    F = n(129724),
    X = n(732335),
    J = n(296146),
    q = n(564735),
    Q = n(981631),
    $ = n(176505),
    Y = n(185923),
    K = n(710352),
    ee = n(124368),
    et = n(388032),
    en = n(266307),
    er = n(455812);
function ei(e, t, n) {
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
let el = (0, S.hQ)(),
    es = (0, S.hQ)(),
    ea = (0, S.hQ)(),
    eo = (0, S.hQ)(),
    ec = (0, S.hQ)(),
    ed = (0, S.hQ)(),
    eu = (0, S.hQ)(),
    eh = (0, S.hQ)(),
    eg = (0, S.hQ)(),
    em = (0, S.hQ)(),
    ep = (0, S.hQ)(),
    ef = (0, L.kt)({
        id: '1',
        type: Q.d4z.DM
    }),
    ex = 'AUTOMATIC_RTC_REGION',
    ej = c.ZP.connectStores([A.Z], () => {
        let { channel: e, submitting: t } = A.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, g.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: r, bitrate: i, userLimit: l, nsfw: s, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: c, threadMetadata: d, defaultAutoArchiveDuration: u, template: h, rtcRegion: m, videoQualityMode: p, defaultReactionEmoji: f, availableTags: x, defaultSortOrder: j, defaultForumLayout: b } = e;
                e.isThread() && (t = (0, I.Z)(t, !0)),
                    (0, g.wk)(e.id, {
                        name: t,
                        type: n,
                        topic: r,
                        bitrate: i,
                        userLimit: l,
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
                        defaultForumLayout: b
                    });
            }
        };
    })(f.Z);
class eb extends i.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && m.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, r, i;
        let l = null !== (r = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== r ? r : '';
        (null !== (i = null === (n = e.channel) || void 0 === n ? void 0 : n.topic) && void 0 !== i ? i : '') !== l &&
            l !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: l,
                richTopicValue: (0, v.JM)(l)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, F.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, F.A)(e * U.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, i, l, c, u, g;
        let m, f;
        let { canManageChannels: x, canSendMessages: j, isThreadModerator: b, canManageThread: v, guild: C, isForumPost: S, isOwner: Z, showAdvancedSlowModeSetting: O } = this.props,
            _ = L.Ec.has(e.type),
            I = e.isForumLikeChannel(),
            W = I && (null === (n = e.availableTags) || void 0 === n ? void 0 : n.every((e) => e.moderated)),
            D = (null === (i = V.default.getCurrentUser()) || void 0 === i ? void 0 : i.isStaff()) === !0,
            A = L.TK.has(e.type)
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(h.xJW, {
                              title: I ? et.NW.string(et.t.yR6Hwc) : et.NW.string(et.t.X8jMDg),
                              className: er.marginTop20,
                              children: I
                                  ? (0, r.jsx)(y.Z, {
                                        innerClassName: en.forumGuidelines,
                                        characterCountClassName: en.forumGuidelinesCharacterCount,
                                        maxCharacterCount: $.Z7,
                                        onChange: this.handleChangeRichTopic,
                                        placeholder: et.NW.string(et.t['71fbmp']),
                                        channel: ef,
                                        textValue: this.state.textTopicValue,
                                        richValue: this.state.richTopicValue,
                                        type: N.Ie.FORUM_CHANNEL_GUIDELINES,
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
                                  : (0, r.jsx)(h.Kx8, {
                                        autoFocus: this.props.subsection === Q.ZfP.TOPIC,
                                        placeholder: et.NW.string(et.t['71fbmp']),
                                        value: w.ZP.translateSurrogatesToInlineEmoji(e.topic),
                                        onChange: this.handleChangeTopic,
                                        error: this.getError('topic'),
                                        maxLength: $.$x,
                                        disabled: !x,
                                        autosize: !0
                                    })
                          }),
                          (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) })
                      ]
                  })
                : null,
            M =
                I && D
                    ? (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(h.xJW, {
                                  title: et.NW.string(et.t.qk2jdX),
                                  className: er.marginTop20,
                                  children: (0, r.jsx)(h.Kx8, {
                                      placeholder: et.NW.string(et.t.DDjD1N),
                                      value: w.ZP.translateSurrogatesToInlineEmoji(null !== (l = e.template) && void 0 !== l ? l : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: K.Vb,
                                      disabled: !x,
                                      autosize: !0
                                  })
                              }),
                              (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) })
                          ]
                      })
                    : null,
            k = e.isForumLikeChannel()
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsxs)(h.xJW, {
                              children: [
                                  (0, r.jsx)(h.vwX, {
                                      id: el,
                                      className: en.formTitle,
                                      children: et.NW.string(et.t['P/y+sr'])
                                  }),
                                  (0, r.jsx)(h.R94, {
                                      id: es,
                                      type: h.R94.Types.DESCRIPTION,
                                      className: en.description,
                                      children: et.NW.string(et.t['/oQQ39'])
                                  }),
                                  (0, r.jsx)(E.Z, { channel: e })
                              ]
                          }),
                          (0, r.jsx)(h.XZJ, {
                              disabled: !x || W,
                              value: e.hasFlag($.zZ.REQUIRE_TAG),
                              type: h.XZJ.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, r.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  children: et.NW.string(et.t['9g2Zys'])
                              })
                          }),
                          (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) })
                      ]
                  })
                : null,
            B = e.isForumLikeChannel()
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsxs)('div', {
                              className: en.twoColumnSettings,
                              children: [
                                  (0, r.jsxs)(h.xJW, {
                                      className: s()(en.settingsLeft, en.settingsDefaultReaction),
                                      children: [
                                          (0, r.jsx)(h.vwX, {
                                              id: ea,
                                              className: en.formTitle,
                                              children: et.NW.string(et.t['8ao1+P'])
                                          }),
                                          (0, r.jsx)(h.R94, {
                                              id: es,
                                              type: h.R94.Types.DESCRIPTION,
                                              className: en.description,
                                              children: et.NW.string(et.t.SdbF0t)
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: en.buttonRow,
                                              children: [
                                                  (0, r.jsx)(h.yRy, {
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: h.yRy.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) => {
                                                          var t, n;
                                                          return (0, r.jsx)(
                                                              h.zxk,
                                                              ((t = (function (e) {
                                                                  for (var t = 1; t < arguments.length; t++) {
                                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                                          r = Object.keys(n);
                                                                      'function' == typeof Object.getOwnPropertySymbols &&
                                                                          (r = r.concat(
                                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                              })
                                                                          )),
                                                                          r.forEach(function (t) {
                                                                              ei(e, t, n[t]);
                                                                          });
                                                                  }
                                                                  return e;
                                                              })({}, e)),
                                                              (n = n =
                                                                  {
                                                                      disabled: !x,
                                                                      onClick: (t) => {
                                                                          var n;
                                                                          null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                                                      },
                                                                      children: et.NW.string(et.t['59QgaG'])
                                                                  }),
                                                              Object.getOwnPropertyDescriptors
                                                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                  : (function (e, t) {
                                                                        var n = Object.keys(e);
                                                                        if (Object.getOwnPropertySymbols) {
                                                                            var r = Object.getOwnPropertySymbols(e);
                                                                            n.push.apply(n, r);
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
                                                      ? (0, r.jsx)(h.zxk, {
                                                            className: en.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: h.zxk.Sizes.MIN,
                                                            look: h.zxk.Looks.LINK,
                                                            color: h.zxk.Colors.RED,
                                                            children: et.NW.string(et.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(T.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumChannel()
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsxs)('div', {
                              className: en.twoColumnSettings,
                              children: [
                                  (0, r.jsxs)(h.xJW, {
                                      className: s()(en.settingsLeft, en.settingsDefaultView),
                                      children: [
                                          (0, r.jsx)(h.hjN, {
                                              title: et.NW.string(et.t.kQvoCw),
                                              children: (0, r.jsx)(h.q4e, {
                                                  options: [
                                                      {
                                                          label: et.NW.string(et.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: et.NW.string(et.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null !== (c = e.defaultForumLayout) && void 0 !== c ? c : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, r.jsx)(h.R94, {
                                              className: er.marginTop8,
                                              type: h.R94.Types.DESCRIPTION,
                                              children: et.NW.string(et.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, r.jsx)(J.Z, { className: en.defaultImageView }) : (0, r.jsx)(q.Z, { className: en.defaultImageView })
                              ]
                          }),
                          (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) })
                      ]
                  })
                : null,
            U = e.isForumLikeChannel()
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(h.xJW, {
                              children: (0, r.jsx)(h.hjN, {
                                  title: et.NW.string(et.t.gePre3),
                                  children: (0, r.jsx)(h.q4e, {
                                      options: [
                                          {
                                              label: et.NW.string(et.t.ElZtzs),
                                              value: o.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: et.NW.string(et.t.w28f3N),
                                              value: o.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, r.jsx)(h.R94, {
                              className: er.marginTop8,
                              type: h.R94.Types.DESCRIPTION,
                              children: et.NW.string(et.t['165cVV'])
                          }),
                          (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) })
                      ]
                  })
                : null,
            H = _ ? b : x,
            F = L.X_.has(e.type)
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsxs)(h.xJW, {
                              children: [
                                  (0, r.jsx)(h.vwX, {
                                      id: eo,
                                      className: er.marginBottom8,
                                      children: et.NW.string(et.t['tTHx9/'])
                                  }),
                                  I
                                      ? (0, r.jsx)(h.vwX, {
                                            className: er.marginTop20,
                                            children: et.NW.string(et.t.O1c02t)
                                        })
                                      : null,
                                  !0 === O
                                      ? (0, r.jsx)(X.Z, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, r.jsx)(h.iRW, {
                                            className: er.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: Q.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !H,
                                            equidistant: !0,
                                            'aria-labelledby': eo,
                                            'aria-describedby': ec
                                        }),
                                  (0, r.jsx)(h.R94, {
                                      id: ec,
                                      type: h.R94.Types.DESCRIPTION,
                                      children: I ? et.NW.string(et.t['a+1pdH']) : _ ? et.NW.string(et.t.OMmNCg) : et.NW.string(et.t['HEA/DQ'])
                                  }),
                                  I
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(h.vwX, {
                                                    className: er.marginTop20,
                                                    children: et.NW.string(et.t['fkY5+v'])
                                                }),
                                                (0, r.jsx)(h.iRW, {
                                                    className: er.marginTop20,
                                                    initialValue: null !== (u = e.defaultThreadRateLimitPerUser) && void 0 !== u ? u : 0,
                                                    markers: Q.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !H,
                                                    equidistant: !0,
                                                    'aria-labelledby': eo,
                                                    'aria-describedby': ec
                                                }),
                                                (0, r.jsx)(h.R94, {
                                                    type: h.R94.Types.DESCRIPTION,
                                                    children: et.NW.string(et.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) })
                      ]
                  })
                : null,
            Y =
                _ && null != e.threadMetadata
                    ? (0, r.jsxs)('div', {
                          children: [
                              (0, r.jsx)(h.xJW, {
                                  children: (0, r.jsx)(p.Z, {
                                      page: Q.ZY5.CHANNEL_SETTINGS,
                                      children: (0, r.jsx)(P.Z, {
                                          isDisabled: !v,
                                          autoArchiveDuration: null !== (g = e.threadMetadata.autoArchiveDuration) && void 0 !== g ? g : ee.AX,
                                          onChange: this.handleAutoArchiveDurationChanged
                                      })
                                  })
                              }),
                              (0, r.jsx)(h.R94, {
                                  className: er.marginTop8,
                                  type: h.R94.Types.DESCRIPTION,
                                  children: S ? et.NW.string(et.t['3aJN9P']) : et.NW.string(et.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            ed =
                e.type === Q.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, r.jsx)('div', {
                          children: (0, r.jsx)(h.j7V, {
                              note: et.NW.string(et.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !v,
                              children: et.NW.string(et.t.s2rpNT)
                          })
                      })
                    : null,
            eu = L.ov.has(e.type)
                ? (0, r.jsx)('div', {
                      children: (0, r.jsx)(h.j7V, {
                          note: et.NW.string(et.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !x || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? et.NW.string(et.t.l6uSVV) : null,
                          children: et.NW.string(et.t.Es25YW)
                      })
                  })
                : null,
            eh =
                L.Y0.has(e.type) && null != C && C.hasFeature(Q.oNc.NEWS) && e.id !== (null == C ? void 0 : C.rulesChannelId) && e.id !== (null == C ? void 0 : C.publicUpdatesChannelId)
                    ? (0, r.jsx)('div', {
                          children: (0, r.jsx)(h.j7V, {
                              note: et.NW.format(et.t.tI7KNT, { documentationLink: z.Z.getArticleURL(Q.BhN.ANNOUNCEMENT_CHANNELS) }),
                              onChange: this.handleNewsChange,
                              value: e.type === Q.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !x,
                              children: et.NW.string(et.t.Au2b7u)
                          })
                      })
                    : null,
            eg = L.uC.has(e.type)
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) }),
                          (0, r.jsx)(p.Z, {
                              page: Q.ZY5.CHANNEL_SETTINGS,
                              children: (0, r.jsx)(P.Z, {
                                  isDisabled: !x,
                                  autoArchiveDuration: (0, R.WD)(e, null),
                                  onChange: this.handleChangeDefaultAutoArchiveDuration
                              })
                          }),
                          (0, r.jsx)(h.R94, {
                              className: er.marginTop8,
                              type: h.R94.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? et.NW.string(et.t.fyXclZ) : et.NW.string(et.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            em = this.props.showChannelSummariesSettings
                ? (0, r.jsx)(h.j7V, {
                      note: et.NW.format(et.t.feJW19, { helpdeskArticle: z.Z.getArticleURL(Q.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag($.zZ.SUMMARIES_DISABLED) && (null == C ? void 0 : C.hasFeature(Q.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !x || !(null == C ? void 0 : C.hasFeature(Q.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, r.jsxs)('div', {
                          className: en.badgedItem,
                          children: [
                              et.NW.string(et.t.id3ozs),
                              (0, r.jsx)(h.IGR, {
                                  text: et.NW.string(et.t.oW0eUV),
                                  color: d.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            ep = e.isMediaChannel()
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) }),
                          (0, r.jsx)(h.j7V, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag($.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: et.NW.string(et.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !x,
                              children: et.NW.string(et.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === Q.d4z.GUILD_CATEGORY ? ((f = et.NW.string(et.t.OCAkGB)), (m = 'category-name')) : e.isForumPost() ? ((f = et.NW.string(et.t.uyVrTE)), (m = 'post-title')) : _ ? ((f = et.NW.string(et.t.j3XWjI)), (m = 'thread-name')) : ((f = et.NW.string(et.t.PVbHDg)), (m = 'channel-name')),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(h.xJW, {
                        title: f,
                        children: (0, r.jsx)(h.oil, {
                            value: t,
                            onChange: this.handleChangeName,
                            onBlur: this.handleBlurName,
                            error: this.getError('name'),
                            name: m,
                            autoFocus: !0,
                            disabled: Z ? !j : !x,
                            maxLength: Q.HN8
                        })
                    }),
                    (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) }),
                    A,
                    M,
                    k,
                    B,
                    F,
                    Y,
                    G,
                    U,
                    ed,
                    eu,
                    eh,
                    em,
                    eg,
                    ep
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
        let i = (0, G.g7)(t, e),
            l = this.getError('bitrate');
        return (0, r.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: er.marginBottom40,
            children: [
                (0, r.jsx)(h.vwX, {
                    id: ed,
                    children: et.NW.string(et.t.w2d0vb)
                }),
                '' !== l &&
                    (0, r.jsx)(h.R94, {
                        id: eu,
                        type: h.geA.DESCRIPTION,
                        style: { color: d.Z.unsafe_rawColors.RED_400.css },
                        className: er.marginBottom8,
                        children: l
                    }),
                (0, r.jsx)(h.iRW, {
                    initialValue: Math.min(e.bitrate, i),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [Q.Fc, Q.epw, i],
                    minValue: Q.Fc,
                    maxValue: i,
                    keyboardStep: Q.V7H,
                    disabled: !n,
                    'aria-labelledby': ed,
                    'aria-describedby': null != l && '' !== l ? eu : eh
                }),
                i > Q.epw
                    ? (0, r.jsx)(h.R94, {
                          id: eh,
                          type: h.geA.DESCRIPTION,
                          children: et.NW.format(et.t.SbQJk5, { bitrate: Q.epw / 1000 })
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
            L.vg.has(e.type) &&
            (e.isGuildVocal() ||
                _.tM.getCurrentConfig({
                    guildId: e.guild_id,
                    location: '9b50bd_1'
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = [
            {
                value: Q.Ucd.AUTO,
                name: et.NW.string(et.t.jjKYpq)
            },
            {
                value: Q.Ucd.FULL,
                name: et.NW.string(et.t['7jOoJC'])
            }
        ];
        return (0, r.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: er.marginBottom40,
            children: [
                (0, r.jsx)(h.xJW, {
                    title: et.NW.string(et.t.jhJEJi),
                    children: (0, r.jsx)(h.FXm, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: i,
                        value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : Q.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, r.jsx)(h.R94, {
                    type: h.geA.DESCRIPTION,
                    children: et.NW.format(et.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? et.NW.string(et.t.XX5ciY) : et.NW.formatToPlainString(et.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            i = e.isGuildStageVoice() ? Q.xGv : Q.$pe;
        return (0, r.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: er.marginBottom40,
            children: [
                (0, r.jsx)(h.vwX, {
                    id: eg,
                    children: et.NW.string(et.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, r.jsx)(h.R94, {
                        id: em,
                        type: h.geA.DESCRIPTION,
                        style: { color: d.Z.unsafe_rawColors.RED_400.css },
                        className: er.marginBottom8,
                        children: n
                    }),
                (0, r.jsx)(h.iRW, {
                    initialValue: Math.min(e.userLimit, i),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, i],
                    minValue: 0,
                    maxValue: i,
                    disabled: !t,
                    'aria-labelledby': eg,
                    'aria-describedby': null != n && '' !== n ? em : ep
                }),
                (0, r.jsx)(h.R94, {
                    id: ep,
                    type: h.geA.DESCRIPTION,
                    children: et.NW.format(e.isGuildStageVoice() ? et.t.OqZI8P : et.t['8yb3JS'], {})
                })
            ]
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: i, guild: l } = this.props;
        if (null == l || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != n &&
            (s = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e.id
                }))).unshift({
                label: et.NW.string(et.t.JEmsam),
                value: ex
            });
        let a = null !== (t = e.rtcRegion) && void 0 !== t ? t : ex;
        return (0, r.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(h.vwX, { children: et.NW.string(et.t.Ms8bX1) }),
                (0, r.jsx)(h.q4e, {
                    options: s,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !i
                }),
                (0, r.jsx)(h.R94, {
                    type: h.geA.DESCRIPTION,
                    children: et.NW.string(et.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t;
        let { theme: i } = this.props;
        return (
            (t = e.type === Q.d4z.GUILD_CATEGORY ? ((0, u.wj)(i) ? n(309095) : n(925442)) : (0, u.wj)(i) ? n(316491) : n(301358)),
            (0, r.jsx)(C.Z, {
                justify: C.Z.Justify.CENTER,
                className: er.marginTop60,
                children: (0, r.jsx)('img', {
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
            : (0, r.jsxs)(h.hjN, {
                  className: 'channel-settings-overview',
                  tag: h.RB0.H1,
                  title: et.NW.string(et.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, r.jsx)(h.$i$, { className: s()(er.marginTop40, er.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
            ei(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, r.jsx)(Z.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleChangeDefaultReactionEmoji(e), n && t();
                    },
                    pickerIntention: Y.Hz.COMMUNITY_CONTENT,
                    channel: n
                });
            }),
            ei(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, $.zZ.REQUIRE_TAG, e);
                (0, g.pW)({ flags: n });
            }),
            ei(this, 'handleChangeName', (e) => {
                let { channel: t } = this.props;
                null != t && (t.isThread() ? (e = (0, I.Z)(e, !1)) : Q.TPd.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, G.Nj)(e)), (0, g.pW)({ name: e }));
            }),
            ei(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, I.Z)(t, !0);
                    e !== t && (0, g.pW)({ name: e });
                }
            }),
            ei(this, 'handleChangeTopic', (e) => {
                (0, g.pW)({ topic: w.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ei(this, 'handleChangeRichTopic', (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t);
            }),
            ei(this, 'handleChangeTemplate', (e) => {
                (0, g.pW)({ template: w.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ei(this, 'handleChangeDefaultReactionEmoji', (e) => {
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
            ei(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, g.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            ei(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, g.pW)({ defaultSortOrder: e });
            }),
            ei(this, 'handleChangeBitrate', (e) => {
                (0, g.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            ei(this, 'handleUserLimitChange', (e) => {
                (0, g.pW)({ userLimit: Math.round(e) });
            }),
            ei(this, 'handleNSFWChange', (e) => {
                (0, g.pW)({ nsfw: e });
            }),
            ei(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, $.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, g.pW)({ flags: n });
            }),
            ei(this, 'handleNewsChange', (e) => {
                (0, g.pW)({ type: e ? Q.d4z.GUILD_ANNOUNCEMENT : Q.d4z.GUILD_TEXT });
            }),
            ei(this, 'handleChangeSlowmode', (e) => {
                (0, g.pW)({ rateLimitPerUser: e });
            }),
            ei(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, g.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            ei(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, g.pW)({ defaultAutoArchiveDuration: e });
            }),
            ei(this, 'handleRegionChange', (e) => {
                (0, g.pW)({ rtcRegion: e === ex ? null : e });
            }),
            ei(this, 'handleVideoQualityModeChange', (e) => {
                (0, g.pW)({ videoQualityMode: e });
            }),
            ei(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, g.pW)({ autoArchiveDuration: e });
            }),
            ei(this, 'handleInvitableChanged', (e) => {
                (0, g.pW)({ invitable: e });
            }),
            ei(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, $.zZ.SUMMARIES_DISABLED, !e);
                (0, g.pW)({ flags: n });
            }),
            ei(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, $.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, g.pW)({ flags: n });
            });
        let i = null !== (n = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== n ? n : '';
        this.state = {
            textTopicValue: i,
            richTopicValue: (0, v.JM)(i),
            topicFocused: !1
        };
    }
}
function eN() {
    let { errors: e, channel: t, submitting: n, subsection: l } = (0, c.cj)([A.Z], () => A.Z.getProps()),
        s = (0, c.e7)([B.Z], () => {
            var e;
            return B.Z.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null);
        }),
        a = (0, c.e7)([W.Z], () => W.Z.theme),
        o = (0, c.e7)([M.Z], () => M.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        d = (0, _.C7)(t),
        u = (0, _.Xb)(t),
        { canManageChannels: h, canSendMessages: g } = (0, c.cj)([k.Z], () => ({
            canManageChannels: k.Z.can(Q.Plq.MANAGE_CHANNELS, t),
            canSendMessages: k.Z.can(Q.Plq.SEND_MESSAGES, t)
        })),
        m = (0, b.ZP)(t),
        p = D.default.getId(),
        f = (0, O.v)(),
        N = null == t ? void 0 : t.id,
        v = (0, j.ts)(t, !1, !0),
        y = x.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        C = i.useCallback(
            (e) => {
                null != N && f.getState().setLayoutType(N, e);
            },
            [N, f]
        );
    return (0, r.jsx)(eb, {
        errors: e,
        channel: t,
        channelName: m,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? d : h,
        canSendMessages: g,
        isThreadModerator: u,
        canManageThread: d,
        subsection: l,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: C,
        showChannelSummariesSettings: v,
        showAdvancedSlowModeSetting: y
    });
}
