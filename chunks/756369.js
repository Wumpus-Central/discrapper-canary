n.d(t, {
    Ay: () => e9,
    OC: () => e6,
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
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(448761),
    c = n(665260),
    u = n(311907),
    d = n(803805),
    p = n(52133),
    m = n(397927),
    f = n(843472),
    g = n(475073),
    h = n(295843),
    _ = n(488331),
    b = n(298481),
    A = n(121401),
    y = n(509282),
    v = n(909338),
    x = n(948729),
    O = n(150099),
    E = n(871751),
    j = n(510790),
    C = n(167189),
    I = n(175335),
    S = n(390248),
    T = n(282108),
    N = n(33358),
    P = n(704400),
    w = n(496376),
    R = n(795982),
    D = n(643612),
    L = n(613760),
    M = n(229527),
    k = n(870136),
    U = n(33525),
    G = n(484724),
    B = n(71755),
    F = n(178879),
    H = n(118331),
    V = n(520586),
    z = n(857071),
    W = n(384231),
    K = n(46054),
    Y = n(731068),
    q = n(619517),
    J = n(207133),
    Q = n(480191),
    Z = n(269849),
    X = n(704413),
    $ = n(695206),
    ee = n(892742),
    et = n(376708),
    en = n(549527),
    er = n(899894),
    ei = n(581034),
    el = n(50777),
    ea = n(378058),
    es = n(443642),
    eo = n(406704),
    ec = n(996522),
    eu = n(253932),
    ed = n(383233),
    ep = n(961350),
    em = n(696451),
    ef = n(834942),
    eg = n(576705),
    eh = n(287809),
    e_ = n(644447),
    eb = n(954571),
    eA = n(927813),
    ey = n(659674),
    ev = n(661191),
    ex = n(998218),
    eO = n(988012),
    eE = n(294520),
    ej = n(141468),
    eC = n(863439),
    eI = n(869938),
    eS = n(143413),
    eT = n(707985),
    eN = n(443228),
    eP = n(341645),
    ew = n(986350),
    eR = n(439401),
    eD = n(990560),
    eL = n(266620),
    eM = n(860227),
    ek = n(564107),
    eU = n(763899),
    eG = n(652176),
    eB = n(382807),
    eF = n(394839),
    eH = n(96782),
    eV = n(573163),
    ez = n(861986),
    eW = n(343552),
    eK = n(581619),
    eY = n(652215),
    eq = n(985018),
    eJ = n(867525);

function eQ(e, t, n) {
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

function eZ(e) {
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
                eQ(e, t, n[t]);
            });
    }
    return e;
}

function eX(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e$ = [eY.Auw.GIFV],
    e0 = 15 * eA.A.Millis.MINUTE,
    e1 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e2 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: l, flags: a } = e,
            s = (0, c.Lt)(a, Y.e5.IS_ANIMATED);
        return null != r && null != l && (q.bp.test(n) || (s && (q.P8.test(n) || q.p4.test(n))))
            ? (0, i.jsx)(eR.A, {
                  width: r,
                  height: l,
                  src: n,
                  url: t,
                  format: d.TL.IMAGE,
                  className: eJ.jj,
              })
            : null;
    };
class e7 extends (r = l.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e1.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, r;
        let { channel: i, message: l, poll: a } = this.props,
            { channel: s, message: o, poll: c } = e;
        return (
            !(0, p.A)(this.state, t) ||
            !(0, p.A)(this.props, e, ["message", "channel"]) ||
            i.type !== s.type ||
            c !== a ||
            o.codedLinks !== l.codedLinks ||
            o.flags !== l.flags ||
            o.giftCodes !== l.giftCodes ||
            o.attachments !== l.attachments ||
            o.embeds !== l.embeds ||
            o.components !== l.components ||
            o.activity !== l.activity ||
            ((n = o.reactions) !== (r = l.reactions) &&
                (n.length !== r.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: i, burst_count: l } = e,
                            { emoji: a, count: s, burst_count: o } = r[t];
                        return l !== o || i !== s || n.id !== a.id || n.name !== a.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case eO.xC.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(w.A, {
                    messageId: e.id,
                    channelId: t.id,
                });
                break;
            case eO.xC.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(b.A, {
                    channelId: t.id,
                });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", {
            className: eJ.od,
            children: r,
        });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: l } = t;
                  if (n === C.I.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eD.A,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext,
                                },
                                r,
                            )
                          : null;
                  if (n === C.I.TEMPLATE)
                      return (0, i.jsx)(
                          B.A,
                          {
                              code: r,
                          },
                          r,
                      );
                  if (n === C.I.EVENT)
                      return (0, i.jsx)(
                          G.A,
                          {
                              code: r,
                          },
                          r,
                      );
                  if (n === C.I.CHANNEL_LINK)
                      return (0, i.jsx)(
                          eN.A,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === C.I.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          L.A,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === C.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: a } = (0, v.N)(l);
                      return (0, i.jsx)(
                          _.A,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: a,
                          },
                          r,
                      );
                  } else if (n === C.I.GUILD_PRODUCT)
                      return (0, i.jsx)(
                          U.A,
                          {
                              code: r,
                          },
                          r,
                      );
                  else if (n === C.I.SERVER_SHOP)
                      return (0, i.jsx)(
                          I.A,
                          {
                              guildId: r,
                          },
                          r,
                      );
                  else if (n === C.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = r.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(
                          el.A,
                          {
                              guildId: t,
                              skuId: e,
                              channel: n,
                          },
                          r,
                      );
                  } else if (n === C.I.QUESTS_EMBED)
                      return (0, i.jsx)(
                          ee.A,
                          {
                              questId: r,
                          },
                          r,
                      );
                  else if (n === C.I.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          y.G,
                          {
                              appId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === C.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, A.u)(r);
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
                  } else if (n === C.I.APP_OAUTH2_LINK)
                      return (0, i.jsx)(
                          x.A,
                          {
                              applicationId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === C.I.COLLECTIBLES_SHOP) return null;
                  else if (n === C.I.EXPERIMENT) return null;
                  else throw Error("Unknown coded link type: ".concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: l, content: a, giftInfo: s } = e,
            o = eh.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eJ.zv,
                          children: (0, i.jsx)(g.A, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: o,
                              type: l,
                              content: a,
                              giftInfo: s,
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
            isLurking: l,
            isPendingMember: a,
            channel: s,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eV.A, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: l,
                  isPendingMember: a,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: r,
                inlineAttachmentMedia: l,
                onMediaItemContextMenu: a,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: u, flags: d } = e;
        if (0 === u.length || e.isPoll() || (0, ed._c)(e)) return null;
        let p = u.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, eY.sbO.IS_THUMBNAIL));
        if (0 === p.length) return null;
        let m = p
                .map((t) => {
                    var n;
                    return eX(eZ({}, (0, Y.Rr)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, c.Lt)(null != (n = t.flags) ? n : 0, eY.sbO.IS_ANIMATED),
                    });
                })
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: f, srcToHandlePreloadImage: g } = (0, Z.o)(
                m,
                {
                    enabledContentHarmTypeFlags: s,
                    shouldHideMediaOptions: o,
                },
                "Media Mosaic",
            ),
            h = m.length > 1,
            _ = (0, c.Lt)(d, eY.pr7.IS_VOICE_MESSAGE);

        function b(e, t) {
            return (0, eE.iW)(e.originalItem, t);
        }
        let A = p.map((i) => {
            let s = (0, Y.aG)(i),
                o = {
                    message: e,
                    item: (0, eH.rC)(i, l),
                    autoPlayGif: n,
                    canRemoveItem: r && (p.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: b,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), a(e, s);
                              }
                            : void 0,
                    renderAudioComponent: _ ? eL.SX : eL.Nj,
                    renderImageComponent: eL.Cr,
                    renderVideoComponent: eL.I1,
                    renderPlaintextFilePreview: eL.R6,
                    renderGenericFileComponent: eL.UB,
                    renderMosaicItemFooter: eL.YE,
                    onPlay: (e, n, r) => {
                        eb.default.track(eY.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: r,
                        });
                    },
                    gifFavoriteButton: e2(s),
                },
                c = (0, e_.E)({
                    proxyURL: i.proxy_url,
                    url: i.url,
                });
            return c in f && h && ((o.onClick = f[c]), (o.handlePreloadImage = g[c])), o;
        });
        return (0, i.jsx)(eF.A, {
            items: A,
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  if (
                      eK.z.has(t.type) ||
                      (0, ey.p6)(t) ||
                      ((0, F.f)(t) && !(0, H.d)(e)) ||
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
                      t.type === eY.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let l = ex.A.safeParseWithQuery(t.url);
                      if (null != l && null != l.pathname) {
                          let a = l.pathname.split("/")[3];
                          if (null != a)
                              return (0, i.jsx)(
                                  h.A,
                                  {
                                      skuId: a,
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
            disableComponentInteractivity: l,
            onMediaItemContextMenu: a,
        } = this.props;
        return (0, i.jsx)(ek.N, {
            gifAutoPlay: t,
            getGifFavButton: e2,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == a || a(t, e);
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(V.Ay, {
                message: e,
                shouldDisableInteractiveComponents: l,
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
        return this.props.channel.type !== eY.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(O.A, {
                  channelId: e.channel_id,
                  messageId: e.id,
              });
    }
    renderEphemeralAccessories(e) {
        return (0, ej.ec)(e)
            ? (0, i.jsx)(ew.A, {
                  message: e,
                  onDeleteMessage: () => {
                      f.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ea.o6)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      es.A,
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
        if (e.hasFlag(eY.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(ec.A, {
                message: e,
                compact: this.props.compact,
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eY.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - ev.default.extractTimestamp(e.id) >= e0)
        )
            return (0, i.jsx)("div", {
                className: eJ.xM,
                children: eq.intl.string(eq.t.ma8Rs0),
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(m.MJ3, {
            dismissable: !0,
            header: eq.intl.string(eq.t.VL1KOk),
            confirmText: eq.intl.string(eq.t.YEHppG),
            cancelText: eq.intl.string(eq.t["ETE/oC"]),
            onCancel: () =>
                this.setState({
                    showSuppressModal: !1,
                }),
            onConfirm: () => {
                f.A.suppressEmbeds(e.id, t.id),
                    this.setState({
                        showSuppressModal: !1,
                    });
            },
            children: [
                (0, i.jsx)(m.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eJ.IX,
                    children: eq.intl.string(eq.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(m.Text, {
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
            ? void this.setState({
                  showRemoveAttachmentModal: !1,
              })
            : (0, i.jsx)(m.MJ3, {
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
                      f.A.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null,
                          });
                  },
                  children: (0, i.jsx)(m.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eJ.IX,
                      children: eq.intl.string(eq.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eB.A, {
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
            t.type !== eY.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      Q.A,
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
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(er.V, {
                  message: e,
              })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eY.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ei.l, {
                  embed: e.embeds[0],
              })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, T.KM)(e)
            ? (0, i.jsx)(P.A, {
                  message: e,
              })
            : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)($.A, {
                message: e,
                poll: t,
                className: eJ.PM,
            });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme
            ? (0, i.jsx)(j.f, {
                  message: e,
              })
            : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, et.Mn)(e, this.props.channel))
            return (0, i.jsx)(en.A, {
                message: e,
            });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, et.Mn)(e, this.props.channel))
            return (0, i.jsx)(R.A, {
                message: e,
            });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(ez.A, {
            message: e,
            compact: t,
            location: ez.O.AFTER_ACCESSORIES,
        });
    }
    render() {
        let { className: e, message: t, poll: n, compact: r } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: a } = this.state,
            o = this.renderEditedTag(t, r),
            c = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            d = this.renderAttachments(t),
            p = this.renderCtaButton(),
            m = this.renderEmbeds(t),
            f = this.renderActivityInvite(t),
            g = this.renderReactions(t),
            h = this.renderPublishBump(t),
            _ = this.renderEphemeralAccessories(t),
            b = this.renderStickersAccessories(t),
            A = this.renderThreadAccessories(t),
            y = this.renderComponentAccessories(t),
            v = this.renderThreadRoleMentionWarning(t),
            x = this.renderEmbeddedApplicationInstanceEmbed(t),
            O = this.renderInteractionPremiumUpsell(t),
            E = this.renderMediaPostEmbeds(t),
            j = this.renderSafetyPolicyNotice(t),
            C = this.renderSafetySystemNotification(t),
            I = this.renderMediaObscureNotice(t),
            S = this.renderPoll(t, n),
            T = this.renderForwardedMessage(t),
            N = this.renderReportedMessage(t),
            P = this.renderShareClientTheme(t);
        return null == c &&
            null == d &&
            null == m &&
            null == f &&
            null == g &&
            null == u &&
            null == h &&
            null == _ &&
            null == b &&
            null == A &&
            null == y &&
            null == x &&
            null == v &&
            null == E &&
            null == j &&
            null != O &&
            null == S &&
            null == T &&
            null == N &&
            null == P
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eM.XL)(t),
                  className: s()(e, eJ.kL),
                  children: [
                      N,
                      T,
                      v,
                      S,
                      P,
                      c,
                      u,
                      E,
                      d,
                      p,
                      m,
                      I,
                      f,
                      b,
                      y,
                      x,
                      O,
                      o,
                      g,
                      h,
                      _,
                      l && this.renderSuppressConfirmModal(),
                      a && this.renderRemoveAttachmentConfirmModal(),
                      A,
                      j,
                      C,
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            eQ(this, "state", {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null,
            }),
            eQ(this, "getAcceptInviteContext", (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id,
                };
            }),
            eQ(this, "renderEmbed", (e, t, n, r) => {
                var l, a, s, o;
                let {
                        gifAutoPlay: c,
                        inlineEmbedMedia: u,
                        canSuppressEmbeds: d,
                        hasSpoilerEmbeds: p,
                        enabledContentHarmTypeFlags: m,
                        shouldAgeVerify: f,
                    } = this.props,
                    g = (0, eE.sC)(e, r, p, m);
                if (e.type === eY.Auw.GIFT) return null;
                let h = e$.includes(e.type)
                    ? e.url
                    : null != (l = null == (a = e.image) ? void 0 : a.url)
                      ? l
                      : null == (s = e.video)
                        ? void 0
                        : s.url;
                return (0, i.jsx)(
                    D.G.Provider,
                    {
                        value: (0, eW.b)(h, e.image, e.video, e.thumbnail, null == (o = e.provider) ? void 0 : o.name),
                        children: (0, i.jsx)(
                            E.Ay,
                            eZ(
                                {
                                    embed: e,
                                    obscureReason: null != g ? g : void 0,
                                    autoPlayGif: c,
                                    hideMedia: !u,
                                    allowFullScreen: !this.props.disableComponentInteractivity,
                                    onSuppressEmbed: d ? this.handleEmbedSuppressed : void 0,
                                    renderTitle: this.renderEmbedTitle,
                                    renderDescription: this.renderEmbedDescription,
                                    message: r,
                                    embedIndex: t,
                                    shouldAgeVerify: null != f && f,
                                },
                                n,
                            ),
                        ),
                    },
                    e.id,
                );
            }),
            eQ(this, "renderEmbedTitle", (e, t) =>
                e.type !== eY.Auw.RICH
                    ? t
                    : (null != e.url && "" !== e.url ? K.A.parseEmbedTitleWithoutLinks : K.A.parseEmbedTitle)(t, !0, {
                          channelId: this.props.channel.id,
                      }),
            ),
            eQ(this, "renderEmbedDescription", (e, t, n) =>
                e.type === eY.Auw.RICH
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
            eQ(this, "handleEmbedSuppressed", (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey
                    ? f.A.suppressEmbeds(t.id, n.id)
                    : this.setState({
                          showSuppressModal: !0,
                      });
            }),
            eQ(this, "handleRemoveAttachment", (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t,
                });
            });
    }
}

function e9(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: l, isMessageSnapshot: a } = e,
        s = (0, u.bG)([ep.default], () => ep.default.getId()),
        o = eu.X6.useSetting(),
        d = eu.hD.useSetting(),
        p = eu.rs.useSetting() && !(0, eS.A)(e.message),
        m = eu.jW.useSetting() && !1 !== e.renderReactions,
        f = eu.kt.useSetting(),
        g = (0, u.bG)([ef.A], () => null == n.guild_id || ef.A.canChatInGuild(n.guild_id), [n]),
        h = (0, u.bG)([z.A], () => null != n.guild_id && z.A.isLurking(n.guild_id), [n]),
        _ = (0, u.bG)([em.Ay, eh.default], () => {
            var e, t;
            let r = eh.default.getCurrentUser();
            return (
                null !=
                    (e =
                        null != n.guild_id && null != r
                            ? null == (t = em.Ay.getMember(n.guild_id, r.id))
                                ? void 0
                                : t.isPending
                            : null) && e
            );
        }),
        { canAddNewReactions: b, canManageMessages: A } = (0, u.cf)(
            [eg.A],
            () => ({
                canAddNewReactions: g && eg.A.can(eY.xBc.ADD_REACTIONS, n),
                canManageMessages: eg.A.can(eY.xBc.MANAGE_MESSAGES, n),
            }),
            [g, n],
        ),
        y = (0, M.ix)(n.guild_id),
        [, v] = (0, k.c)(n.guild_id),
        x = (0, eo.Id)(n),
        O =
            (s === r.author.id || A) &&
            r.author.id !== eY.oIV &&
            !1 !== l &&
            !(0, c.Lt)(r.flags, eY.pr7.EPHEMERAL) &&
            x &&
            (0, eI.A)(r) >= 1,
        E = s === r.author.id && x && !a,
        j = r.author.id === s,
        C = r.isFirstMessageInForumPost(n),
        I = (0, eT.A)({
            channel: n,
            canChat: g,
            renderReactions: m,
            canAddNewReactions: b,
            isLurking: h,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: x,
            isAutomodQuarantined: y,
        }),
        T = (0, W.S)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        P = (0, J.A)(null == n ? void 0 : n.id),
        w = (0, X.A)(r),
        R = (0, N.P)(r),
        D = (0, eC.z)(n),
        L = (0, eO._f)(r.id, r.channel_id),
        U = (0, S._R)();
    return (0, i.jsx)(
        e7,
        eX(
            eZ(
                eX(
                    eZ(
                        {
                            canSuppressEmbeds: O,
                            canDeleteAttachments: E,
                        },
                        I,
                    ),
                    {
                        disableReactionReads: !!C || I.disableReactionReads,
                    },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && D,
                hasBailedAst: e.hasBailedAst,
                isLurking: h && g,
                isPendingMember: _ && g,
                isCurrentUser: j,
                inlineAttachmentMedia: o,
                inlineEmbedMedia: d,
                renderEmbeds: p,
                gifAutoPlay: f,
                canRenderReferralEmbed: n.isDM(),
                poll: w,
                showListsAndHeaders: T,
                showMaskedLinks: T,
                shouldHideMediaOptions: P,
                enabledContentHarmTypeFlags: R,
                ctaButtonType: L,
                shouldAgeVerify: U,
            },
        ),
    );
}
eQ(e7, "defaultProps", {
    renderEmbeds: !0,
    compact: !1,
});
let e6 = (e) => {
    var t;
    let {
            message: n,
            channel: r,
            disableReactionReads: l = !1,
            renderThreadAccessory: a = !1,
            disableReactionCreates: s = !0,
            disableReactionUpdates: o = !0,
            disableComponentInteractivity: c = !0,
        } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, [
            "message",
            "channel",
            "disableReactionReads",
            "renderThreadAccessory",
            "disableReactionCreates",
            "disableReactionUpdates",
            "disableComponentInteractivity",
        ]),
        d = eu.X6.useSetting(),
        p = eu.hD.useSetting(),
        m = eu.rs.useSetting(),
        f = eu.kt.useSetting(),
        g = (0, W.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        h = (0, J.A)(null == r ? void 0 : r.id),
        _ = (0, N.P)(n),
        b = (0, eO._f)(n.id, n.channel_id),
        A = (0, X.A)(n);
    return (0, i.jsx)(
        e7,
        eX(eZ({}, u), {
            message: n,
            channel: r,
            disableReactionReads: l,
            disableReactionCreates: s,
            disableReactionUpdates: o,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: a,
            inlineAttachmentMedia: d,
            inlineEmbedMedia: p,
            renderEmbeds: m,
            gifAutoPlay: f,
            poll: A,
            showListsAndHeaders: g,
            showMaskedLinks: g,
            shouldHideMediaOptions: h,
            enabledContentHarmTypeFlags: _,
            ctaButtonType: b,
        }),
    );
};
