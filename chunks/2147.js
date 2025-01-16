n.d(t, {
    G: function () {
        return ef;
    },
    Z: function () {
        return eC;
    }
}),
    n(789020),
    n(47120),
    n(733860),
    n(653041);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(313361),
    o = n(683860),
    d = n(442837),
    c = n(692547),
    u = n(780384),
    h = n(481060),
    m = n(787014),
    g = n(771340),
    p = n(410575),
    x = n(852860),
    f = n(129865),
    v = n(902840),
    j = n(933557),
    C = n(541716),
    b = n(752305),
    T = n(893718),
    N = n(600164),
    S = n(313201),
    Z = n(907040),
    E = n(633302),
    y = n(109434),
    I = n(162389),
    R = n(946458),
    w = n(968437),
    _ = n(665906),
    L = n(456077),
    A = n(747212),
    M = n(210887),
    D = n(131704),
    B = n(314897),
    P = n(388610),
    O = n(430824),
    F = n(496675),
    k = n(903223),
    V = n(594174),
    G = n(934415),
    U = n(70956),
    H = n(630388),
    W = n(63063),
    z = n(129724),
    X = n(296146),
    Q = n(564735),
    Y = n(981631),
    q = n(176505),
    J = n(185923),
    K = n(710352),
    $ = n(124368),
    ee = n(388032),
    et = n(642661),
    en = n(232186);
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
    er = (0, S.hQ)(),
    ea = (0, S.hQ)(),
    eo = (0, S.hQ)(),
    ed = (0, S.hQ)(),
    ec = (0, S.hQ)(),
    eu = (0, S.hQ)(),
    eh = (0, S.hQ)(),
    em = (0, S.hQ)(),
    eg = (0, S.hQ)(),
    ep = (0, D.kt)({
        id: '1',
        type: Y.d4z.DM
    }),
    ex = 'AUTOMATIC_RTC_REGION',
    ef = d.ZP.connectStores([P.Z], () => {
        let { channel: e, submitting: t } = P.Z.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, m.S1)(e.id);
            },
            onSave() {
                if (null == e) return;
                let { name: t, type: n, topic: i, bitrate: l, userLimit: s, nsfw: r, flags: a, rateLimitPerUser: o, defaultThreadRateLimitPerUser: d, threadMetadata: c, defaultAutoArchiveDuration: u, template: h, rtcRegion: g, videoQualityMode: p, defaultReactionEmoji: x, availableTags: f, defaultSortOrder: v, defaultForumLayout: j } = e;
                e.isThread() && (t = (0, L.Z)(t, !0)),
                    (0, m.wk)(e.id, {
                        name: t,
                        type: n,
                        topic: i,
                        bitrate: l,
                        userLimit: s,
                        nsfw: r,
                        flags: a,
                        rateLimitPerUser: o,
                        defaultThreadRateLimitPerUser: d,
                        autoArchiveDuration: null == c ? void 0 : c.autoArchiveDuration,
                        locked: null == c ? void 0 : c.locked,
                        invitable: null == c ? void 0 : c.invitable,
                        defaultAutoArchiveDuration: u,
                        template: h,
                        rtcRegion: g,
                        videoQualityMode: p,
                        defaultReactionEmoji: x,
                        availableTags: f,
                        defaultSortOrder: v,
                        defaultForumLayout: j
                    });
            }
        };
    })(x.Z);
function ev(e) {
    let { channel: t, onChange: n } = e,
        [s, r] = l.useState(null),
        a = t.rateLimitPerUser,
        o = l.useMemo(() => {
            let e = [...(null != s ? s : Y.BiE)];
            return (
                !e.includes(a) && e.unshift(a),
                e.map((e) => ({
                    label: (0, z.A)(e, !1),
                    value: e
                }))
            );
        }, [s, a]),
        d = l.useCallback(
            (e) => {
                n(e), r(null);
            },
            [n]
        ),
        c = l.useCallback((e) => {
            if ('' === e) {
                r(null);
                return;
            }
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) {
                r(null);
                return;
            }
            n <= Y.GI0 && t.push(n);
            let i = n * U.Z.Seconds.MINUTE;
            i <= Y.GI0 && t.push(i);
            let l = n * U.Z.Seconds.HOUR;
            l <= Y.GI0 && t.push(l), r(t);
        }, []),
        u = l.useCallback(() => {
            r(null);
        }, []);
    return (0, i.jsx)(h.SearchableSelect, {
        className: en.marginBottom8,
        value: a,
        onChange: d,
        onSearchChange: c,
        options: o,
        onBlur: u,
        placeholder: ee.intl.string(ee.t.dBqQu7)
    });
}
class ej extends l.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && g.Z.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, i, l;
        let s = null !== (i = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== i ? i : '';
        (null !== (l = null === (n = e.channel) || void 0 === n ? void 0 : n.topic) && void 0 !== l ? l : '') !== s &&
            s !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: s,
                richTopicValue: (0, b.JM)(s)
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getCooldownSliderMarker(e) {
        return (0, z.A)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, z.A)(e * U.Z.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, l, s, d, u, m;
        let g, x;
        let { canManageChannels: f, canSendMessages: v, isThreadModerator: j, canManageThread: b, guild: N, isForumPost: S, isOwner: Z, showAdvancedSlowModeSetting: y } = this.props,
            _ = D.Ec.has(e.type),
            L = e.isForumLikeChannel(),
            M = L && (null === (n = e.availableTags) || void 0 === n ? void 0 : n.every((e) => e.moderated)),
            B = (null === (l = V.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) === !0,
            P = D.TK.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.FormItem, {
                              title: L ? ee.intl.string(ee.t.yR6Hwc) : ee.intl.string(ee.t.X8jMDg),
                              className: en.marginTop20,
                              children: L
                                  ? (0, i.jsx)(T.Z, {
                                        innerClassName: et.forumGuidelines,
                                        characterCountClassName: et.forumGuidelinesCharacterCount,
                                        maxCharacterCount: q.Z7,
                                        onChange: this.handleChangeRichTopic,
                                        placeholder: ee.intl.string(ee.t['71fbmp']),
                                        channel: ep,
                                        textValue: this.state.textTopicValue,
                                        richValue: this.state.richTopicValue,
                                        type: C.Ie.FORUM_CHANNEL_GUIDELINES,
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
                                  : (0, i.jsx)(h.TextArea, {
                                        autoFocus: this.props.subsection === Y.ZfP.TOPIC,
                                        placeholder: ee.intl.string(ee.t['71fbmp']),
                                        value: E.ZP.translateSurrogatesToInlineEmoji(e.topic),
                                        onChange: this.handleChangeTopic,
                                        error: this.getError('topic'),
                                        maxLength: q.$x,
                                        disabled: !f,
                                        autosize: !0
                                    })
                          }),
                          (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            O =
                L && B
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(h.FormItem, {
                                  title: ee.intl.string(ee.t.qk2jdX),
                                  className: en.marginTop20,
                                  children: (0, i.jsx)(h.TextArea, {
                                      placeholder: ee.intl.string(ee.t.DDjD1N),
                                      value: E.ZP.translateSurrogatesToInlineEmoji(null !== (s = e.template) && void 0 !== s ? s : ''),
                                      onChange: this.handleChangeTemplate,
                                      error: this.getError('template'),
                                      maxLength: K.Vb,
                                      disabled: !f,
                                      autosize: !0
                                  })
                              }),
                              (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) })
                          ]
                      })
                    : null,
            F = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(h.FormItem, {
                              children: [
                                  (0, i.jsx)(h.FormTitle, {
                                      id: el,
                                      className: et.formTitle,
                                      children: ee.intl.string(ee.t['P/y+sr'])
                                  }),
                                  (0, i.jsx)(h.FormText, {
                                      id: es,
                                      type: h.FormText.Types.DESCRIPTION,
                                      className: et.description,
                                      children: ee.intl.string(ee.t['/oQQ39'])
                                  }),
                                  (0, i.jsx)(I.Z, { channel: e })
                              ]
                          }),
                          (0, i.jsx)(h.Checkbox, {
                              disabled: !f || M,
                              value: e.hasFlag(q.zZ.REQUIRE_TAG),
                              type: h.Checkbox.Types.INVERTED,
                              onChange: (e, t) => this.handleRequireTagChanged(t),
                              children: (0, i.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  children: ee.intl.string(ee.t['9g2Zys'])
                              })
                          }),
                          (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            k = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: et.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(h.FormItem, {
                                      className: r()(et.settingsLeft, et.settingsDefaultReaction),
                                      children: [
                                          (0, i.jsx)(h.FormTitle, {
                                              id: er,
                                              className: et.formTitle,
                                              children: ee.intl.string(ee.t['8ao1+P'])
                                          }),
                                          (0, i.jsx)(h.FormText, {
                                              id: es,
                                              type: h.FormText.Types.DESCRIPTION,
                                              className: et.description,
                                              children: ee.intl.string(ee.t.SdbF0t)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: et.buttonRow,
                                              children: [
                                                  (0, i.jsx)(h.Popout, {
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: 'right',
                                                      animation: h.Popout.Animation.NONE,
                                                      align: 'center',
                                                      children: (e) =>
                                                          (0, i.jsx)(h.Button, {
                                                              ...e,
                                                              disabled: !f,
                                                              onClick: (t) => {
                                                                  var n;
                                                                  null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                                              },
                                                              children: ee.intl.string(ee.t['59QgaG'])
                                                          })
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, i.jsx)(h.Button, {
                                                            className: et.removeButton,
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            size: h.Button.Sizes.MIN,
                                                            look: h.Button.Looks.LINK,
                                                            color: h.Button.Colors.RED,
                                                            children: ee.intl.string(ee.t.N86XcH)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(R.Z, { reactionEmoji: e.defaultReactionEmoji })
                              ]
                          }),
                          (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            G = e.isForumChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)('div', {
                              className: et.twoColumnSettings,
                              children: [
                                  (0, i.jsxs)(h.FormItem, {
                                      className: r()(et.settingsLeft, et.settingsDefaultView),
                                      children: [
                                          (0, i.jsx)(h.FormSection, {
                                              title: ee.intl.string(ee.t.kQvoCw),
                                              children: (0, i.jsx)(h.SingleSelect, {
                                                  options: [
                                                      {
                                                          label: ee.intl.string(ee.t['4HXEZG']),
                                                          value: a.X.LIST
                                                      },
                                                      {
                                                          label: ee.intl.string(ee.t['8RswJC']),
                                                          value: a.X.GRID
                                                      }
                                                  ],
                                                  value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : a.X.LIST,
                                                  onChange: this.handleChangeDefaultForumLayout
                                              })
                                          }),
                                          (0, i.jsx)(h.FormText, {
                                              className: en.marginTop8,
                                              type: h.FormText.Types.DESCRIPTION,
                                              children: ee.intl.string(ee.t.mOSViY)
                                          })
                                      ]
                                  }),
                                  e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(X.Z, { className: et.defaultImageView }) : (0, i.jsx)(Q.Z, { className: et.defaultImageView })
                              ]
                          }),
                          (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            U = e.isForumLikeChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.FormItem, {
                              children: (0, i.jsx)(h.FormSection, {
                                  title: ee.intl.string(ee.t.gePre3),
                                  children: (0, i.jsx)(h.SingleSelect, {
                                      options: [
                                          {
                                              label: ee.intl.string(ee.t.ElZtzs),
                                              value: o.z.LATEST_ACTIVITY
                                          },
                                          {
                                              label: ee.intl.string(ee.t.w28f3N),
                                              value: o.z.CREATION_DATE
                                          }
                                      ],
                                      value: e.getDefaultSortOrder(),
                                      onChange: this.handleChangeDefaultSortOrder
                                  })
                              })
                          }),
                          (0, i.jsx)(h.FormText, {
                              className: en.marginTop8,
                              type: h.FormText.Types.DESCRIPTION,
                              children: ee.intl.string(ee.t['165cVV'])
                          }),
                          (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            H = _ ? j : f,
            z = D.X_.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsxs)(h.FormItem, {
                              children: [
                                  (0, i.jsx)(h.FormTitle, {
                                      id: ea,
                                      className: en.marginBottom8,
                                      children: ee.intl.string(ee.t['tTHx9/'])
                                  }),
                                  L
                                      ? (0, i.jsx)(h.FormTitle, {
                                            className: en.marginTop20,
                                            children: ee.intl.string(ee.t.O1c02t)
                                        })
                                      : null,
                                  !0 === y
                                      ? (0, i.jsx)(ev, {
                                            channel: e,
                                            onChange: this.handleChangeSlowmode
                                        })
                                      : (0, i.jsx)(h.Slider, {
                                            className: en.marginTop20,
                                            initialValue: e.rateLimitPerUser,
                                            markers: Y.BiE,
                                            stickToMarkers: !0,
                                            onValueChange: this.handleChangeSlowmode,
                                            onMarkerRender: this.getCooldownSliderMarker,
                                            disabled: !H,
                                            equidistant: !0,
                                            'aria-labelledby': ea,
                                            'aria-describedby': eo
                                        }),
                                  (0, i.jsx)(h.FormText, {
                                      id: eo,
                                      type: h.FormText.Types.DESCRIPTION,
                                      children: L ? ee.intl.string(ee.t['a+1pdH']) : _ ? ee.intl.string(ee.t.OMmNCg) : ee.intl.string(ee.t['HEA/DQ'])
                                  }),
                                  L
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(h.FormTitle, {
                                                    className: en.marginTop20,
                                                    children: ee.intl.string(ee.t['fkY5+v'])
                                                }),
                                                (0, i.jsx)(h.Slider, {
                                                    className: en.marginTop20,
                                                    initialValue: null !== (u = e.defaultThreadRateLimitPerUser) && void 0 !== u ? u : 0,
                                                    markers: Y.BiE,
                                                    stickToMarkers: !0,
                                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                                    onMarkerRender: this.getCooldownSliderMarker,
                                                    disabled: !H,
                                                    equidistant: !0,
                                                    'aria-labelledby': ea,
                                                    'aria-describedby': eo
                                                }),
                                                (0, i.jsx)(h.FormText, {
                                                    type: h.FormText.Types.DESCRIPTION,
                                                    children: ee.intl.string(ee.t.kdZU6O)
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) })
                      ]
                  })
                : null,
            J =
                _ && null != e.threadMetadata
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(h.FormItem, {
                                  children: (0, i.jsx)(p.Z, {
                                      page: Y.ZY5.CHANNEL_SETTINGS,
                                      children: (0, i.jsx)(A.Z, {
                                          autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : $.AX,
                                          guild: N,
                                          channel: e,
                                          onChange: this.handleAutoArchiveDurationChanged,
                                          isDisabled: !b
                                      })
                                  })
                              }),
                              (0, i.jsx)(h.FormText, {
                                  className: en.marginTop8,
                                  type: h.FormText.Types.DESCRIPTION,
                                  children: S ? ee.intl.string(ee.t['3aJN9P']) : ee.intl.string(ee.t.YUXr4e)
                              })
                          ]
                      })
                    : null,
            ei =
                e.type === Y.d4z.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(h.FormSwitch, {
                              note: ee.intl.string(ee.t.cSyXJi),
                              onChange: this.handleInvitableChanged,
                              value: e.threadMetadata.invitable,
                              hideBorder: !0,
                              disabled: !b,
                              children: ee.intl.string(ee.t.s2rpNT)
                          })
                      })
                    : null,
            ed = D.ov.has(e.type)
                ? (0, i.jsx)('div', {
                      children: (0, i.jsx)(h.FormSwitch, {
                          note: ee.intl.string(ee.t['9eUgwc']),
                          onChange: this.handleNSFWChange,
                          value: e.isNSFW(),
                          hideBorder: !0,
                          disabled: !f || null != e.linkedLobby,
                          disabledText: null != e.linkedLobby ? ee.intl.string(ee.t.l6uSVV) : null,
                          children: ee.intl.string(ee.t.Es25YW)
                      })
                  })
                : null,
            ec =
                D.Y0.has(e.type) && null != N && N.hasFeature(Y.oNc.NEWS) && e.id !== (null == N ? void 0 : N.rulesChannelId) && e.id !== (null == N ? void 0 : N.publicUpdatesChannelId)
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsx)(h.FormSwitch, {
                              note: ee.intl.format(ee.t.tI7KNT, { documentationLink: W.Z.getArticleURL(Y.BhN.ANNOUNCEMENT_CHANNELS) }),
                              onChange: this.handleNewsChange,
                              value: e.type === Y.d4z.GUILD_ANNOUNCEMENT,
                              hideBorder: !0,
                              disabled: !f,
                              children: ee.intl.string(ee.t.Au2b7u)
                          })
                      })
                    : null,
            eu = D.uC.has(e.type)
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) }),
                          (0, i.jsx)(p.Z, {
                              page: Y.ZY5.CHANNEL_SETTINGS,
                              children: (0, i.jsx)(A.Z, {
                                  autoArchiveDuration: (0, w.WD)(e, null),
                                  guild: N,
                                  channel: e,
                                  onChange: this.handleChangeDefaultAutoArchiveDuration,
                                  isDisabled: !f
                              })
                          }),
                          (0, i.jsx)(h.FormText, {
                              className: en.marginTop8,
                              type: h.FormText.Types.DESCRIPTION,
                              children: e.isForumLikeChannel() ? ee.intl.string(ee.t.fyXclZ) : ee.intl.string(ee.t.W3Noi4)
                          })
                      ]
                  })
                : null,
            eh = this.props.showChannelSummariesSettings
                ? (0, i.jsx)(h.FormSwitch, {
                      note: ee.intl.format(ee.t.feJW19, { helpdeskArticle: W.Z.getArticleURL(Y.BhN.CONVERSATION_SUMMARIES) }),
                      onChange: this.handleChannelSummariesToggled,
                      value: !e.hasFlag(q.zZ.SUMMARIES_DISABLED) && (null == N ? void 0 : N.hasFeature(Y.oNc.SUMMARIES_ENABLED_BY_USER)),
                      hideBorder: !0,
                      disabled: !f || !(null == N ? void 0 : N.hasFeature(Y.oNc.SUMMARIES_ENABLED_BY_USER)),
                      children: (0, i.jsxs)('div', {
                          className: et.badgedItem,
                          children: [
                              ee.intl.string(ee.t.id3ozs),
                              (0, i.jsx)(h.TextBadge, {
                                  text: ee.intl.string(ee.t.oW0eUV),
                                  color: c.Z.colors.BG_BRAND.css
                              })
                          ]
                      })
                  })
                : null,
            em = e.isMediaChannel()
                ? (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) }),
                          (0, i.jsx)(h.FormSwitch, {
                              onChange: this.handleShowMediaOptionsToggled,
                              value: !e.hasFlag(q.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                              note: ee.intl.string(ee.t.J4wCc3),
                              hideBorder: !0,
                              disabled: !f,
                              children: ee.intl.string(ee.t.u8LZOj)
                          })
                      ]
                  })
                : null;
        return (
            e.type === Y.d4z.GUILD_CATEGORY ? ((x = ee.intl.string(ee.t.OCAkGB)), (g = 'category-name')) : e.isForumPost() ? ((x = ee.intl.string(ee.t.uyVrTE)), (g = 'post-title')) : _ ? ((x = ee.intl.string(ee.t.j3XWjI)), (g = 'thread-name')) : ((x = ee.intl.string(ee.t.PVbHDg)), (g = 'channel-name')),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(h.FormItem, {
                        title: x,
                        children: (0, i.jsx)(h.TextInput, {
                            value: t,
                            onChange: this.handleChangeName,
                            onBlur: this.handleBlurName,
                            error: this.getError('name'),
                            name: g,
                            autoFocus: !0,
                            disabled: Z ? !v : !f,
                            maxLength: Y.HN8
                        })
                    }),
                    (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) }),
                    P,
                    O,
                    F,
                    k,
                    z,
                    J,
                    G,
                    U,
                    ei,
                    ed,
                    ec,
                    eh,
                    eu,
                    em
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
        let l = (0, G.g7)(t, e),
            s = this.getError('bitrate');
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
                (0, i.jsx)(h.FormTitle, {
                    id: ed,
                    children: ee.intl.string(ee.t.w2d0vb)
                }),
                '' !== s &&
                    (0, i.jsx)(h.FormText, {
                        id: ec,
                        type: h.FormTextTypes.DESCRIPTION,
                        style: { color: c.Z.unsafe_rawColors.RED_400.css },
                        className: en.marginBottom8,
                        children: s
                    }),
                (0, i.jsx)(h.Slider, {
                    initialValue: Math.min(e.bitrate, l),
                    onValueChange: this.handleChangeBitrate,
                    onValueRender: this.renderBitrate,
                    onMarkerRender: this.renderBitrate,
                    markers: [Y.Fc, Y.epw, l],
                    minValue: Y.Fc,
                    maxValue: l,
                    keyboardStep: Y.V7H,
                    disabled: !n,
                    'aria-labelledby': ed,
                    'aria-describedby': null != s && '' !== s ? ec : eu
                }),
                l > Y.epw
                    ? (0, i.jsx)(h.FormText, {
                          id: eu,
                          type: h.FormTextTypes.DESCRIPTION,
                          children: ee.intl.format(ee.t.SbQJk5, { bitrate: Y.epw / 1000 })
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
            D.vg.has(e.type) &&
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
        let l = [
            {
                value: Y.Ucd.AUTO,
                name: ee.intl.string(ee.t.jjKYpq)
            },
            {
                value: Y.Ucd.FULL,
                name: ee.intl.string(ee.t['7jOoJC'])
            }
        ];
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
                (0, i.jsx)(h.FormItem, {
                    title: ee.intl.string(ee.t.jhJEJi),
                    children: (0, i.jsx)(h.RadioGroup, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return this.handleVideoQualityModeChange(t);
                        },
                        options: l,
                        value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : Y.Ucd.AUTO,
                        disabled: !n
                    })
                }),
                (0, i.jsx)(h.FormText, {
                    type: h.FormTextTypes.DESCRIPTION,
                    children: ee.intl.format(ee.t.c5W7Sk, {})
                })
            ]
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e)) ? ee.intl.string(ee.t.XX5ciY) : ee.intl.formatToPlainString(ee.t['3uHFUV'], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError('user_limit'),
            l = e.isGuildStageVoice() ? Y.xGv : Y.$pe;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
                (0, i.jsx)(h.FormTitle, {
                    id: eh,
                    children: ee.intl.string(ee.t['/AoSGB'])
                }),
                '' !== n &&
                    (0, i.jsx)(h.FormText, {
                        id: em,
                        type: h.FormTextTypes.DESCRIPTION,
                        style: { color: c.Z.unsafe_rawColors.RED_400.css },
                        className: en.marginBottom8,
                        children: n
                    }),
                (0, i.jsx)(h.Slider, {
                    initialValue: Math.min(e.userLimit, l),
                    onValueChange: this.handleUserLimitChange,
                    onValueRender: this.onRenderUserLimit,
                    onMarkerRender: (e) => (0 === Math.round(e) ? '\u221E' : e),
                    markers: [0, l],
                    minValue: 0,
                    maxValue: l,
                    disabled: !t,
                    'aria-labelledby': eh,
                    'aria-describedby': null != n && '' !== n ? em : eg
                }),
                (0, i.jsx)(h.FormText, {
                    id: eg,
                    type: h.FormTextTypes.DESCRIPTION,
                    children: ee.intl.format(e.isGuildStageVoice() ? ee.t.OqZI8P : ee.t['8yb3JS'], {})
                })
            ]
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: l, guild: s } = this.props;
        if (null == s || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let r = [];
        null != n &&
            (r = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e.id
                }))).unshift({
                label: ee.intl.string(ee.t.JEmsam),
                value: ex
            });
        let a = null !== (t = e.rtcRegion) && void 0 !== t ? t : ex;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(h.FormTitle, { children: ee.intl.string(ee.t.Ms8bX1) }),
                (0, i.jsx)(h.SingleSelect, {
                    options: r,
                    value: a,
                    onChange: this.handleRegionChange,
                    isDisabled: !l
                }),
                (0, i.jsx)(h.FormText, {
                    type: h.FormTextTypes.DESCRIPTION,
                    children: ee.intl.string(ee.t['dbTs+/'])
                })
            ]
        });
    }
    renderJuiceImage(e) {
        let t;
        let { theme: l } = this.props;
        return (
            (t = e.type === Y.d4z.GUILD_CATEGORY ? ((0, u.wj)(l) ? n(309095) : n(925442)) : (0, u.wj)(l) ? n(316491) : n(301358)),
            (0, i.jsx)(N.Z, {
                justify: N.Z.Justify.CENTER,
                className: en.marginTop60,
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
            : (0, i.jsxs)(h.FormSection, {
                  className: 'channel-settings-overview',
                  tag: h.FormTitleTags.H1,
                  title: ee.intl.string(ee.t['/dp6yc']),
                  children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(h.FormDivider, { className: r()(en.marginTop40, en.marginBottom40) }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
                return (0, i.jsx)(Z.Z, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleChangeDefaultReactionEmoji(e), n && t();
                    },
                    pickerIntention: J.Hz.COMMUNITY_CONTENT,
                    channel: n
                });
            }),
            ei(this, 'handleRequireTagChanged', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, q.zZ.REQUIRE_TAG, e);
                (0, m.pW)({ flags: n });
            }),
            ei(this, 'handleChangeName', (e) => {
                let { channel: t } = this.props;
                if (null != t) t.isThread() ? (e = (0, L.Z)(e, !1)) : Y.TPd.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, G.Nj)(e)), (0, m.pW)({ name: e });
            }),
            ei(this, 'handleBlurName', () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, L.Z)(t, !0);
                    e !== t && (0, m.pW)({ name: e });
                }
            }),
            ei(this, 'handleChangeTopic', (e) => {
                (0, m.pW)({ topic: E.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ei(this, 'handleChangeRichTopic', (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n
                }),
                    this.handleChangeTopic(t);
            }),
            ei(this, 'handleChangeTemplate', (e) => {
                (0, m.pW)({ template: E.ZP.translateInlineEmojiToSurrogates(e) });
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
                (0, m.pW)({ defaultReactionEmoji: t });
            }),
            ei(this, 'handleChangeDefaultForumLayout', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            ei(this, 'handleChangeDefaultSortOrder', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, m.pW)({ defaultSortOrder: e });
            }),
            ei(this, 'handleChangeBitrate', (e) => {
                (0, m.pW)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            ei(this, 'handleUserLimitChange', (e) => {
                (0, m.pW)({ userLimit: Math.round(e) });
            }),
            ei(this, 'handleNSFWChange', (e) => {
                (0, m.pW)({ nsfw: e });
            }),
            ei(this, 'handleActiveChannelsRemovedChange', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, q.zZ.ACTIVE_CHANNELS_REMOVED, !e);
                (0, m.pW)({ flags: n });
            }),
            ei(this, 'handleNewsChange', (e) => {
                (0, m.pW)({ type: e ? Y.d4z.GUILD_ANNOUNCEMENT : Y.d4z.GUILD_TEXT });
            }),
            ei(this, 'handleChangeSlowmode', (e) => {
                (0, m.pW)({ rateLimitPerUser: e });
            }),
            ei(this, 'handleChangeThreadMessageSlowmode', (e) => {
                (0, m.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            ei(this, 'handleChangeDefaultAutoArchiveDuration', (e) => {
                (0, m.pW)({ defaultAutoArchiveDuration: e });
            }),
            ei(this, 'handleRegionChange', (e) => {
                (0, m.pW)({ rtcRegion: e === ex ? null : e });
            }),
            ei(this, 'handleVideoQualityModeChange', (e) => {
                (0, m.pW)({ videoQualityMode: e });
            }),
            ei(this, 'handleAutoArchiveDurationChanged', (e) => {
                (0, m.pW)({ autoArchiveDuration: e });
            }),
            ei(this, 'handleInvitableChanged', (e) => {
                (0, m.pW)({ invitable: e });
            }),
            ei(this, 'handleChannelSummariesToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, q.zZ.SUMMARIES_DISABLED, !e);
                (0, m.pW)({ flags: n });
            }),
            ei(this, 'handleShowMediaOptionsToggled', (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, H.mB)(t.flags, q.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, m.pW)({ flags: n });
            });
        let l = null !== (n = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== n ? n : '';
        this.state = {
            textTopicValue: l,
            richTopicValue: (0, b.JM)(l),
            topicFocused: !1
        };
    }
}
function eC() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, d.cj)([P.Z], () => P.Z.getProps()),
        r = (0, d.e7)([k.Z], () => {
            var e;
            return k.Z.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null);
        }),
        a = (0, d.e7)([M.Z], () => M.Z.theme),
        o = (0, d.e7)([O.Z], () => O.Z.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, _.C7)(t),
        u = (0, _.Xb)(t),
        { canManageChannels: h, canSendMessages: m } = (0, d.cj)([F.Z], () => ({
            canManageChannels: F.Z.can(Y.Plq.MANAGE_CHANNELS, t),
            canSendMessages: F.Z.can(Y.Plq.SEND_MESSAGES, t)
        })),
        g = (0, j.ZP)(t),
        p = B.default.getId(),
        x = (0, y.v)(),
        C = null == t ? void 0 : t.id,
        b = (0, v.ts)(t, !1, !0),
        T = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'ChannelSettingsOverview'
        }).enabled,
        N = l.useCallback(
            (e) => {
                null != C && x.getState().setLayoutType(C, e);
            },
            [C, x]
        );
    return (0, i.jsx)(ej, {
        errors: e,
        channel: t,
        channelName: g,
        submitting: n,
        regions: r,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
        canSendMessages: m,
        isThreadModerator: u,
        canManageThread: c,
        subsection: s,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(p),
        handleSetDefaultLayout: N,
        showChannelSummariesSettings: b,
        showAdvancedSlowModeSetting: T
    });
}
