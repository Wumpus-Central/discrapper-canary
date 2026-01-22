n.d(t, {
    Ay: () => e8,
    OC: () => e9,
    iV: () => e7,
}),
    n(896048),
    n(938796),
    n(747238),
    n(65821),
    n(114821),
    n(339614);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(448761),
    c = n(665260),
    u = n(311907),
    d = n(803805),
    f = n(52133),
    p = n(397927),
    _ = n(843472),
    h = n(475073),
    m = n(295843),
    g = n(488331),
    E = n(298481),
    b = n(121401),
    y = n(509282),
    O = n(909338),
    A = n(948729),
    v = n(150099),
    S = n(871751),
    I = n(510790),
    T = n(167189),
    C = n(175335),
    N = n(390248),
    R = n(282108),
    w = n(33358),
    P = n(704400),
    D = n(496376),
    x = n(795982),
    L = n(643612),
    j = n(613760),
    M = n(229527),
    k = n(870136),
    U = n(33525),
    G = n(484724),
    V = n(71755),
    F = n(178879),
    B = n(118331),
    H = n(520586),
    Y = n(857071),
    W = n(384231),
    K = n(46054),
    z = n(731068),
    q = n(619517),
    X = n(207133),
    Z = n(480191),
    Q = n(269849),
    $ = n(704413),
    J = n(695206),
    ee = n(892742),
    et = n(376708),
    en = n(549527),
    er = n(899894),
    ei = n(581034),
    ea = n(50777),
    es = n(378058),
    eo = n(443642),
    el = n(406704),
    ec = n(996522),
    eu = n(253932),
    ed = n(383233),
    ef = n(961350),
    ep = n(696451),
    e_ = n(834942),
    eh = n(576705),
    em = n(287809),
    eg = n(644447),
    eE = n(954571),
    eb = n(927813),
    ey = n(659674),
    eO = n(661191),
    eA = n(998218),
    ev = n(988012),
    eS = n(294520),
    eI = n(141468),
    eT = n(863439),
    eC = n(869938),
    eN = n(143413),
    eR = n(707985),
    ew = n(443228),
    eP = n(341645),
    eD = n(986350),
    ex = n(439401),
    eL = n(990560),
    ej = n(266620),
    eM = n(860227),
    ek = n(564107),
    eU = n(763899),
    eG = n(652176),
    eV = n(382807),
    eF = n(394839),
    eB = n(96782),
    eH = n(573163),
    eY = n(861986),
    eW = n(343552),
    eK = n(581619),
    ez = n(652215),
    eq = n(985018),
    eX = n(867525);
function eZ(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eQ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eZ(e, t, n[t]);
            });
    }
    return e;
}
function e$(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eJ(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e$(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e0(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = e1(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function e1(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let e2 = [ez.Auw.GIFV],
    e3 = 15 * eb.A.Millis.MINUTE,
    e6 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e4 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, flags: s } = e,
            o = (0, c.Lt)(s, z.e5.IS_ANIMATED);
        return null != r && null != a && (q.bp.test(n) || (o && (q.P8.test(n) || q.p4.test(n))))
            ? (0, i.jsx)(ex.A, {
                  width: r,
                  height: a,
                  src: n,
                  url: t,
                  format: d.TL.IMAGE,
                  className: eX.jj,
              })
            : null;
    };
function e5(e, t) {
    return (
        e === t ||
        (e.length === t.length &&
            !e.some((e, n) => {
                let { emoji: r, count: i, burst_count: a } = e,
                    { emoji: s, count: o, burst_count: l } = t[n];
                return a !== l || i !== o || r.id !== s.id || r.name !== s.name;
            }))
    );
}
class e7 extends (r = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e6.has(e));
    }
    shouldComponentUpdate(e, t) {
        let { channel: n, message: r, poll: i } = this.props,
            { channel: a, message: s, poll: o } = e;
        return (
            !(0, f.A)(this.state, t) ||
            !(0, f.A)(this.props, e, ["message", "channel"]) ||
            n.type !== a.type ||
            o !== i ||
            s.codedLinks !== r.codedLinks ||
            s.flags !== r.flags ||
            s.giftCodes !== r.giftCodes ||
            s.attachments !== r.attachments ||
            s.embeds !== r.embeds ||
            s.components !== r.components ||
            s.activity !== r.activity ||
            !e5(s.reactions, r.reactions)
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case ev.xC.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(D.A, {
                    messageId: e.id,
                    channelId: t.id,
                });
                break;
            case ev.xC.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(E.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", {
            className: eX.od,
            children: r,
        });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === T.I.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eL.A,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext,
                                },
                                r,
                            )
                          : null;
                  if (n === T.I.TEMPLATE) return (0, i.jsx)(V.A, { code: r }, r);
                  if (n === T.I.EVENT) return (0, i.jsx)(G.A, { code: r }, r);
                  if (n === T.I.CHANNEL_LINK)
                      return (0, i.jsx)(
                          ew.A,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === T.I.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          j.A,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === T.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: s } = (0, O.N)(a);
                      return (0, i.jsx)(
                          g.A,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: s,
                          },
                          r,
                      );
                  } else if (n === T.I.GUILD_PRODUCT) return (0, i.jsx)(U.A, { code: r }, r);
                  else if (n === T.I.SERVER_SHOP) return (0, i.jsx)(C.A, { guildId: r }, r);
                  else if (n === T.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = r.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(
                          ea.A,
                          {
                              guildId: t,
                              skuId: e,
                              channel: n,
                          },
                          r,
                      );
                  } else if (n === T.I.QUESTS_EMBED) return (0, i.jsx)(ee.A, { questId: r }, r);
                  else if (n === T.I.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          y.G,
                          {
                              appId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === T.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, b.u)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(
                                y.$,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e,
                                },
                                r,
                            );
                  } else if (n === T.I.APP_OAUTH2_LINK)
                      return (0, i.jsx)(
                          A.A,
                          {
                              applicationId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === T.I.COLLECTIBLES_SHOP) return null;
                  else if (n === T.I.EXPERIMENT) return null;
                  else throw Error("Unknown coded link type: ".concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: a, content: s, giftInfo: o } = e,
            l = em.default.getCurrentUser();
        return null != l && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eX.zv,
                          children: (0, i.jsx)(h.A, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: l,
                              type: a,
                              content: s,
                              giftInfo: o,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: r,
            isLurking: a,
            isGuest: s,
            isPendingMember: o,
            channel: l,
            forceAddReactions: c,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eH.A, {
                  message: e,
                  channel: l,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: a,
                  isGuest: s,
                  isPendingMember: o,
                  forceAddReactions: c,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: r,
                inlineAttachmentMedia: a,
                onMediaItemContextMenu: s,
                enabledContentHarmTypeFlags: o,
                shouldHideMediaOptions: l,
            } = this.props,
            { attachments: u, flags: d } = e;
        if (0 === u.length || e.isPoll() || (0, ed._c)(e)) return null;
        let f = u.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, ez.sbO.IS_THUMBNAIL));
        if (0 === f.length) return null;
        let p = f
                .map((t) => {
                    var n;
                    return eJ(eQ({}, (0, z.Rr)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, c.Lt)(null != (n = t.flags) ? n : 0, ez.sbO.IS_ANIMATED),
                    });
                })
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: _, srcToHandlePreloadImage: h } = (0, Q.o)(
                p,
                {
                    enabledContentHarmTypeFlags: o,
                    shouldHideMediaOptions: l,
                },
                "Media Mosaic",
            ),
            m = p.length > 1,
            g = (0, c.Lt)(d, ez.pr7.IS_VOICE_MESSAGE);
        function E(e, t) {
            return (0, eS.iW)(e.originalItem, t);
        }
        let b = f.map((i) => {
            let o = (e, n, r) => {
                    eE.default.track(ez.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                        type: i.content_type,
                        flags: i.flags,
                        size: i.size,
                        duration: r,
                    });
                },
                l = (0, z.aG)(i),
                c = {
                    message: e,
                    item: (0, eB.rC)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: r && (f.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: E,
                    onContextMenu:
                        null != s
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), s(e, l);
                              }
                            : void 0,
                    renderAudioComponent: g ? ej.SX : ej.Nj,
                    renderImageComponent: ej.Cr,
                    renderVideoComponent: ej.I1,
                    renderPlaintextFilePreview: ej.R6,
                    renderGenericFileComponent: ej.UB,
                    renderMosaicItemFooter: ej.YE,
                    onPlay: o,
                    gifFavoriteButton: e4(l),
                },
                u = (0, eg.E)({
                    proxyURL: i.proxy_url,
                    url: i.url,
                });
            return u in _ && m && ((c.onClick = _[u]), (c.handlePreloadImage = h[u])), c;
        });
        return (0, i.jsx)(eF.A, { items: b });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  if (
                      eK.z.has(t.type) ||
                      (0, ey.p6)(t) ||
                      ((0, F.f)(t) && !(0, B.d)(e)) ||
                      (0, ey.V)(t) ||
                      (0, ey.G8)(t)
                  )
                      return null;
                  let r = {
                      renderImageComponent: eG.LL,
                      renderVideoComponent: eG.$o,
                      renderLinkComponent: eG.bU,
                  };
                  if (
                      t.type === ez.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let a = eA.A.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let s = a.pathname.split("/")[3];
                          if (null != s)
                              return (0, i.jsx)(
                                  m.A,
                                  {
                                      skuId: s,
                                      renderFallback: () => this.renderEmbed(t, n, r, e),
                                  },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: r,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: s,
        } = this.props;
        return (0, i.jsx)(ek.N, {
            gifAutoPlay: t,
            getGifFavButton: e4,
            getOnMediaItemContextMenu:
                null == s
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == s || s(t, e);
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(H.Ay, {
                message: e,
                shouldDisableInteractiveComponents: a,
            }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eU.A, {
            channel: t,
            message: e,
            hideParty: !1,
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== ez.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(v.A, {
                  channelId: e.channel_id,
                  messageId: e.id,
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eI.ec)(e)
            ? (0, i.jsx)(eD.A, {
                  message: e,
                  onDeleteMessage: () => {
                      _.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, es.o6)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      eo.A,
                      {
                          channel: n,
                          isInteracting: r,
                          renderableSticker: e,
                      },
                      e.id,
                  ),
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(ez.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(ec.A, {
                message: e,
                compact: this.props.compact,
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(ez.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eO.default.extractTimestamp(e.id) >= e3)
        )
            return (0, i.jsx)("div", {
                className: eX.xM,
                children: eq.intl.string(eq.t.ma8Rs0),
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(p.MJ3, {
            dismissable: !0,
            header: eq.intl.string(eq.t.VL1KOk),
            confirmText: eq.intl.string(eq.t.YEHppG),
            cancelText: eq.intl.string(eq.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eX.IX,
                    children: eq.intl.string(eq.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: eq.intl.string(eq.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(p.MJ3, {
                  dismissable: !0,
                  header: eq.intl.string(eq.t.CbTIEo),
                  confirmText: eq.intl.string(eq.t.kFwAsa),
                  cancelText: eq.intl.string(eq.t["ETE/oC"]),
                  onCancel: () =>
                      this.setState({
                          showRemoveAttachmentModal: !1,
                          attachmentToDelete: null,
                      }),
                  onConfirm: () => {
                      let r = t.attachments.filter((e) => e.id !== n.id);
                      _.A.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null,
                          });
                  },
                  children: (0, i.jsx)(p.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eX.IX,
                      children: eq.intl.string(eq.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== l.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eV.A, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eP.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== ez.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      Z.A,
                      {
                          embedUrl: t.url,
                          message: e,
                          channel: this.props.channel,
                      },
                      t.id,
                  ),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ez.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(er.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ez.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ei.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, R.KM)(e)
            ? (0, i.jsx)(P.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)(J.A, {
                message: e,
                poll: t,
                className: eX.PM,
            });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(I.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, et.Mn)(e, this.props.channel)) return (0, i.jsx)(en.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, et.Mn)(e, this.props.channel)) return (0, i.jsx)(x.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eY.A, {
            message: e,
            compact: t,
            location: eY.O.AFTER_ACCESSORIES,
        });
    }
    render() {
        let { className: e, message: t, poll: n, compact: r } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: s } = this.state,
            l = this.renderEditedTag(t, r),
            c = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            d = this.renderAttachments(t),
            f = this.renderCtaButton(),
            p = this.renderEmbeds(t),
            _ = this.renderActivityInvite(t),
            h = this.renderReactions(t),
            m = this.renderPublishBump(t),
            g = this.renderEphemeralAccessories(t),
            E = this.renderStickersAccessories(t),
            b = this.renderThreadAccessories(t),
            y = this.renderComponentAccessories(t),
            O = this.renderThreadRoleMentionWarning(t),
            A = this.renderEmbeddedApplicationInstanceEmbed(t),
            v = this.renderInteractionPremiumUpsell(t),
            S = this.renderMediaPostEmbeds(t),
            I = this.renderSafetyPolicyNotice(t),
            T = this.renderSafetySystemNotification(t),
            C = this.renderMediaObscureNotice(t),
            N = this.renderPoll(t, n),
            R = this.renderForwardedMessage(t),
            w = this.renderReportedMessage(t),
            P = this.renderShareClientTheme(t);
        return null == c &&
            null == d &&
            null == p &&
            null == _ &&
            null == h &&
            null == u &&
            null == m &&
            null == g &&
            null == E &&
            null == b &&
            null == y &&
            null == A &&
            null == O &&
            null == S &&
            null == I &&
            null != v &&
            null == N &&
            null == R &&
            null == w &&
            null == P
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eM.XL)(t),
                  className: o()(e, eX.kL),
                  children: [
                      w,
                      R,
                      O,
                      N,
                      P,
                      c,
                      u,
                      S,
                      d,
                      f,
                      p,
                      C,
                      _,
                      E,
                      y,
                      A,
                      v,
                      l,
                      h,
                      m,
                      g,
                      a && this.renderSuppressConfirmModal(),
                      s && this.renderRemoveAttachmentConfirmModal(),
                      b,
                      I,
                      T,
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            eZ(this, "state", {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null,
            }),
            eZ(this, "getAcceptInviteContext", (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id,
                };
            }),
            eZ(this, "renderEmbed", (e, t, n, r) => {
                var a, s, o, l;
                let {
                        gifAutoPlay: c,
                        inlineEmbedMedia: u,
                        canSuppressEmbeds: d,
                        hasSpoilerEmbeds: f,
                        enabledContentHarmTypeFlags: p,
                        shouldAgeVerify: _,
                    } = this.props,
                    h = (0, eS.sC)(e, r, f, p);
                if (e.type === ez.Auw.GIFT) return null;
                let m = e2.includes(e.type)
                    ? e.url
                    : null != (a = null == (s = e.image) ? void 0 : s.url)
                      ? a
                      : null == (o = e.video)
                        ? void 0
                        : o.url;
                return (0, i.jsx)(
                    L.G.Provider,
                    {
                        value: (0, eW.b)(m, e.image, e.video, e.thumbnail, null == (l = e.provider) ? void 0 : l.name),
                        children: (0, i.jsx)(
                            S.Ay,
                            eQ(
                                {
                                    embed: e,
                                    obscureReason: null != h ? h : void 0,
                                    autoPlayGif: c,
                                    hideMedia: !u,
                                    allowFullScreen: !this.props.disableComponentInteractivity,
                                    onSuppressEmbed: d ? this.handleEmbedSuppressed : void 0,
                                    renderTitle: this.renderEmbedTitle,
                                    renderDescription: this.renderEmbedDescription,
                                    message: r,
                                    embedIndex: t,
                                    shouldAgeVerify: null != _ && _,
                                },
                                n,
                            ),
                        ),
                    },
                    e.id,
                );
            }),
            eZ(this, "renderEmbedTitle", (e, t) =>
                e.type !== ez.Auw.RICH
                    ? t
                    : (null != e.url && "" !== e.url ? K.A.parseEmbedTitleWithoutLinks : K.A.parseEmbedTitle)(t, !0, {
                          channelId: this.props.channel.id,
                      }),
            ),
            eZ(this, "renderEmbedDescription", (e, t, n) =>
                e.type === ez.Auw.RICH
                    ? K.A.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks,
                      })
                    : t,
            ),
            eZ(this, "handleEmbedSuppressed", (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? _.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eZ(this, "handleRemoveAttachment", (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t,
                });
            });
    }
}
function e8(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: a, isMessageSnapshot: s } = e,
        o = (0, u.bG)([ef.default], () => ef.default.getId()),
        l = eu.X6.useSetting(),
        d = eu.hD.useSetting(),
        f = eu.rs.useSetting() && !(0, eN.A)(e.message),
        p = eu.jW.useSetting() && !1 !== e.renderReactions,
        _ = eu.kt.useSetting(),
        h = (0, u.bG)([e_.A], () => null == n.guild_id || e_.A.canChatInGuild(n.guild_id), [n]),
        m = (0, u.bG)([Y.A], () => null != n.guild_id && Y.A.isLurking(n.guild_id), [n]),
        g = (0, u.bG)([ep.Ay], () => ep.Ay.isCurrentUserGuest(n.guild_id), [n]),
        E = (0, u.bG)([ep.Ay, em.default], () => {
            var e, t;
            let r = em.default.getCurrentUser();
            return (
                null !=
                    (e =
                        null != n.guild_id && null != r
                            ? null == (t = ep.Ay.getMember(n.guild_id, r.id))
                                ? void 0
                                : t.isPending
                            : null) && e
            );
        }),
        { canAddNewReactions: b, canManageMessages: y } = (0, u.cf)(
            [eh.A],
            () => ({
                canAddNewReactions: h && eh.A.can(ez.xBc.ADD_REACTIONS, n),
                canManageMessages: eh.A.can(ez.xBc.MANAGE_MESSAGES, n),
            }),
            [h, n],
        ),
        O = (0, M.ix)(n.guild_id),
        [, A] = (0, k.c)(n.guild_id),
        v = (0, el.Id)(n),
        S =
            (o === r.author.id || y) &&
            r.author.id !== ez.oIV &&
            !1 !== a &&
            !(0, c.Lt)(r.flags, ez.pr7.EPHEMERAL) &&
            v &&
            (0, eC.A)(r) >= 1,
        I = o === r.author.id && v && !s,
        T = r.author.id === o,
        C = r.isFirstMessageInForumPost(n),
        R = (0, eR.A)({
            channel: n,
            canChat: h,
            renderReactions: p,
            canAddNewReactions: b,
            isLurking: m,
            isGuest: g,
            communicationDisabled: A,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: O,
        }),
        P = (0, W.S)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        D = (0, X.A)(null == n ? void 0 : n.id),
        x = (0, $.A)(r),
        L = (0, w.P)(r),
        j = (0, eT.z)(n),
        U = (0, ev._f)(r.id, r.channel_id),
        G = (0, N._R)();
    return (0, i.jsx)(
        e7,
        eJ(
            eQ(
                eJ(
                    eQ(
                        {
                            canSuppressEmbeds: S,
                            canDeleteAttachments: I,
                        },
                        R,
                    ),
                    { disableReactionReads: !!C || R.disableReactionReads },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && j,
                hasBailedAst: e.hasBailedAst,
                isLurking: m && h,
                isGuest: g && h,
                isPendingMember: E && h,
                isCurrentUser: T,
                inlineAttachmentMedia: l,
                inlineEmbedMedia: d,
                renderEmbeds: f,
                gifAutoPlay: _,
                canRenderReferralEmbed: n.isDM(),
                poll: x,
                showListsAndHeaders: P,
                showMaskedLinks: P,
                shouldHideMediaOptions: D,
                enabledContentHarmTypeFlags: L,
                ctaButtonType: U,
                shouldAgeVerify: G,
            },
        ),
    );
}
eZ(e7, "defaultProps", {
    renderEmbeds: !0,
    compact: !1,
});
let e9 = (e) => {
    var t;
    let {
            message: n,
            channel: r,
            disableReactionReads: a = !1,
            renderThreadAccessory: s = !1,
            disableReactionCreates: o = !0,
            disableReactionUpdates: l = !0,
            disableComponentInteractivity: c = !0,
        } = e,
        u = e0(e, [
            "message",
            "channel",
            "disableReactionReads",
            "renderThreadAccessory",
            "disableReactionCreates",
            "disableReactionUpdates",
            "disableComponentInteractivity",
        ]),
        d = eu.X6.useSetting(),
        f = eu.hD.useSetting(),
        p = eu.rs.useSetting(),
        _ = eu.kt.useSetting(),
        h = (0, W.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        m = (0, X.A)(null == r ? void 0 : r.id),
        g = (0, w.P)(n),
        E = (0, ev._f)(n.id, n.channel_id),
        b = (0, $.A)(n);
    return (0, i.jsx)(
        e7,
        eJ(eQ({}, u), {
            message: n,
            channel: r,
            disableReactionReads: a,
            disableReactionCreates: o,
            disableReactionUpdates: l,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: s,
            inlineAttachmentMedia: d,
            inlineEmbedMedia: f,
            renderEmbeds: p,
            gifAutoPlay: _,
            poll: b,
            showListsAndHeaders: h,
            showMaskedLinks: h,
            shouldHideMediaOptions: m,
            enabledContentHarmTypeFlags: g,
            ctaButtonType: E,
        }),
    );
};
