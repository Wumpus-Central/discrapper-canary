"use strict";
n.d(t, { Ay: () => es, rr: () => ei }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(144165),
    l = n(939249),
    u = n(789645),
    c = n(775602),
    d = n(567243),
    _ = n(652215);
function f(e) {
    return "music.apple.com" === e;
}
var h = n(17928),
    p = n(462887),
    E = n(363195);
let m = Object.freeze({
    EMBED: (e, t, n) => `https://embed.music.apple.com/${e}?theme=${t}&i=${null != n ? encodeURIComponent(n) : ""}`,
});
var g = n(472840);
function A(e) {
    let {
            className: t,
            embed: { url: n },
        } = e,
        r = (0, h.bG)([E.A], () => (0, p.M)(E.A.theme));
    if (null == n) return null;
    let s = null,
        o = null,
        l = null;
    try {
        let e = d.parse(n, !0);
        (s = e.host), (o = e.pathname), (l = e.query.i ?? null), Array.isArray(l) && (l = l[0]);
    } catch (e) {
        return null;
    }
    if (!f(s) || null == o) return null;
    let u = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(o) ? 2 : 1,
        c = o.split("/"),
        _ = c[u]?.toLowerCase();
    null != l && (_ = "song");
    let A = 450;
    return (
        "song" === _ ? (A = 175) : "music-video" === _ && (A = 371),
        (o = o.substr(1)),
        (0, i.jsx)("iframe", {
            className: a()(g.li, t),
            src: m.EMBED(o, r ? "dark" : "light", l),
            style: { maxWidth: 660, minWidth: 300, width: "100%", height: A },
            frameBorder: 0,
            sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
            allow: "encrypted-media *; fullscreen *; clipboard-write",
        })
    );
}
var I = n(338717),
    T = n(643612),
    S = n(731068);
let N = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");
function y(e) {
    let t = null,
        n = null,
        i = null;
    try {
        (t = (i = d.parse(e, !0)).host), (n = i.pathname);
    } catch (e) {
        return null;
    }
    return null != i && N.test(t ?? "") && null != n ? i : null;
}
function C(e) {
    let {
        className: t,
        embed: { url: n, thumbnail: r },
    } = e;
    if (null == n || null == r) return null;
    let s = y(n);
    if (null == s) return null;
    let o = s.query.iframe_url;
    if (null == o || Array.isArray(o) || null == y(o)) return null;
    let { width: l, height: u } = r,
        c = l,
        d = u;
    return (
        (l > 500 || u > 400) && (l > u ? ((c = 500), (d = (500 * u) / l)) : ((c = (400 * l) / u), (d = 400))),
        (0, i.jsx)("iframe", {
            className: a()(g.FS, t),
            src: o,
            style: { width: c, height: d },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        })
    );
}
n(508300);
var v = n(607470),
    O = n(375708);
function R(e) {
    let {
            poster: t,
            src: n,
            width: s,
            height: a,
            naturalWidth: o,
            naturalHeight: l,
            play: u = !0,
            className: c,
            alt: d,
            responsive: f,
        } = e,
        h = r.useRef(null);
    return (r.useEffect(() => {
        let { current: e } = h;
        u
            ? e?.play()?.catch((e) => {
                  if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e;
              })
            : e?.pause();
    }, [u]),
    (o <= _.AaC && l <= _.oJQ) || (o <= _.oJQ && l <= _.AaC))
        ? (0, i.jsx)(v.A, {
              ref: h,
              className: c,
              poster: t,
              src: n,
              width: s,
              height: a,
              responsive: f,
              muted: !0,
              loop: !0,
              autoPlay: u,
              playsInline: !0,
              preload: "none",
              "aria-label": d,
          })
        : (0, i.jsx)("img", { alt: "", src: t, width: s, height: a });
}
function b(e) {
    let {
        src: t,
        poster: n,
        naturalWidth: r,
        naturalHeight: s,
        responsive: a,
        autoPlay: o,
        className: l,
        playable: u = !0,
        renderImageComponent: c,
        alt: d = O.intl.string(O.t.I5gL2H),
        sourceMetadata: _,
        ...f
    } = e;
    return (0, i.jsx)(T.G.Consumer, {
        children: (e) =>
            c({
                ...f,
                alt: d,
                src: n,
                containerClassName: l,
                autoPlay: o,
                animated: u,
                responsive: a,
                renderAccessory: e,
                tabIndex: u ? 0 : -1,
                dataSafeSrc: t,
                children(e) {
                    let { src: n, size: o, animating: c, alt: d } = e;
                    return (0, i.jsx)(R, {
                        alt: d,
                        className: l,
                        poster: n,
                        src: t,
                        width: o.width,
                        height: o.height,
                        naturalWidth: r,
                        naturalHeight: s,
                        responsive: a,
                        play: u && c,
                    });
                },
                sourceMetadata: _,
                analyticsSource: "LazyGIFV",
            }),
    });
}
var D = n(619517),
    L = n(821209),
    w = n(492230),
    M = n(114212),
    P = n(343552),
    x = n(302031);
function U(e) {
    return null != e && "open.spotify.com" === e;
}
var k = n(272984);
function G(e) {
    let {
        className: t,
        embed: { url: n },
    } = e;
    if (null == n) return null;
    let r = null,
        s = null;
    try {
        let e = d.parse(n.replace(/intl-[^/]+\//, ""), !0);
        (r = e.host), (s = e.pathname);
    } catch (e) {
        return null;
    }
    if (!U(r) || null == s) return null;
    let o = s.split("/"),
        l = null != o[1] ? o[1].toLowerCase() : null,
        u = null != o[3] ? o[3].toLowerCase() : null,
        c = o[4];
    if (
        !["track", "playlist", "album", "artist", "user", "show", "episode"].includes(l ?? "") ||
        ("user" === l && "playlist" !== u)
    )
        return null;
    "user" === l && "playlist" === u && null != c && (s = `/playlist/${c}`);
    let _ = 352;
    return (
        "track" === l ? (_ = 80) : ("episode" === l || "show" === l) && (_ = 232),
        (0, i.jsx)("iframe", {
            className: a()(g.IL, t),
            src: k.RQ.EMBED(s),
            style: { maxWidth: 400, minWidth: 300, width: "100%", height: _ },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            allow: "clipboard-write",
        })
    );
}
var F = n(734057),
    V = n(644447),
    B = n(174459),
    H = n(625494),
    j = n(58703),
    Y = n(659674),
    W = n(515718),
    K = n(240248),
    z = n(998218),
    $ = n(259407),
    q = n(191704);
let Z = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    X = ["PlayStation"];
function Q(e) {
    let t = e.embed.url,
        n = e.embed.provider?.name;
    if (null == t || null == n) return null;
    let r = null;
    try {
        r = d.parse(t, !0);
    } catch (e) {
        return null;
    }
    let s = ((e, t) => {
        let { host: n, pathname: i } = t,
            r = [];
        if ((null != i && (r = i.split("/")), "PlayStation" === e)) {
            let e;
            if (null == n || !Z.includes(n) || 2 !== r.length) return null;
            let t = r[1];
            return {
                embedUrl: ((e = O.intl.currentLocale), `https://${n}/embed/${t}?locale=${e}`),
                style: { width: 400, height: 300, borderRadius: 6 },
            };
        }
        return null;
    })(n, r);
    return null == s
        ? null
        : (0, i.jsx)("iframe", {
              src: s.embedUrl,
              className: a()(q.u, e.className),
              style: s.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
var J = n(692051),
    ee = n(838541),
    et = n(992595);
function en(e) {
    let t = z.A.toURLSafe(e);
    return null == t ? e : (t.searchParams.set("format", "png"), t.toString());
}
function ei(e) {
    let {
            className: t,
            iframeWrapperClassName: n,
            maxWidth: s,
            maxHeight: o,
            thumbnail: l,
            video: u,
            provider: c,
            allowFullScreen: d = !0,
            responsive: f = !1,
            renderImageComponent: h,
            renderVideoComponent: p,
            renderLinkComponent: E,
            playable: m = !0,
            autoPlay: A = !1,
            autoMute: I,
            volume: T,
            onPlay: S,
            onPause: N,
            onEnded: y,
            onControlsHide: C,
            onControlsShow: v,
            onVolumeChange: O,
            onMute: R,
            href: b,
            placeholder: D,
            placeholderVersion: w,
            sourceMetadata: M,
        } = e,
        [P, x] = r.useState(A),
        U = null != u && null == u.proxyURL,
        k = r.useCallback(() => x(!1), [x]),
        G = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                S?.(!1),
                x(!0),
                U &&
                    (H._.dispatch(_.jej.VIDEO_EMBED_PLAYBACK_STARTED),
                    H._.subscribeOnce(_.jej.VIDEO_EMBED_PLAYBACK_STARTED, k));
        };
    r.useEffect(
        () => () => {
            U && H._.unsubscribe(_.jej.VIDEO_EMBED_PLAYBACK_STARTED, k);
        },
        [U, k],
    );
    let { width: F, height: B } = l;
    null != u && ((F = u.width), (B = u.height));
    let j = (0, W.Uj)({ width: F, height: B, maxWidth: s, maxHeight: o });
    (F = Math.max(j.width, 150)), (B = Math.max(j.height, 144));
    let Y = (0, V.E)(l);
    if (null != u && null != u.proxyURL)
        return (0, i.jsx)("div", {
            className: a()(g.pu, t),
            children: p({
                poster: Y,
                src: u.proxyURL,
                placeholder: D,
                placeholderVersion: w,
                width: F,
                height: B,
                responsive: f,
                autoPlay: A,
                onEnded: y,
                naturalWidth: u.width,
                naturalHeight: u.height,
                onVolumeChange: O,
                playable: m,
                autoMute: I,
                volume: T,
                onPlay: S,
                onPause: N,
                onMute: R,
                onControlsHide: C,
                onControlsShow: v,
                sourceMetadata: M,
            }),
        });
    if (P && null != u) {
        let e,
            r = !0 === I || ("function" == typeof I && I()),
            l = { width: F, height: B },
            _ = { width: F, height: B };
        if (f) {
            let t = 0 !== F ? B / F : 1;
            (l = { maxWidth: s, maxHeight: o, width: void 0, height: void 0 }),
                (_ = { paddingBottom: `${100 * t}%`, maxWidth: F }),
                (e = { position: "absolute", top: 0, left: 0, maxWidth: F, maxHeight: B });
        }
        return (0, i.jsx)("div", {
            className: t,
            style: l,
            children: (0, i.jsx)("div", {
                className: a()(g.pu, n),
                style: _,
                children: (0, i.jsx)($.Ay, {
                    provider: c,
                    src: u.url,
                    style: e,
                    width: F,
                    height: B,
                    allowFullScreen: d,
                    autoMute: r,
                }),
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: a()(g.pu, t),
        style: f ? { maxWidth: F } : { width: F, height: B },
        children: [
            h({
                src: Y,
                width: F,
                height: B,
                maxWidth: F,
                maxHeight: B,
                responsive: f,
                containerClassName: g.tW,
                imageClassName: g.jq,
                placeholder: D,
                placeholderVersion: w,
                onClick: m && null != u ? G : null,
                sourceMetadata: M,
                analyticsSource: "EmbedVideo",
            }),
            (0, i.jsx)("div", {
                className: g._W,
                children: (0, i.jsx)("div", {
                    className: g.Fo,
                    children: m
                        ? (0, i.jsx)(L.A, {
                              onPlay: null != u ? G : null,
                              externalURL: b,
                              renderLinkComponent: E,
                              messageId: M?.message?.id,
                              channelId: M?.message?.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}
function er(e) {
    let {
        className: t,
        href: n,
        autoPlay: r,
        maxWidth: s,
        maxHeight: o,
        thumbnail: l,
        video: u,
        renderImageComponent: c,
        responsive: d,
        alt: _,
        disableAltTextDisplay: f = !1,
        playable: h = !0,
        hiddenSpoilers: p,
        placeholder: E,
        placeholderVersion: m,
        sourceMetadata: A,
    } = e;
    return (0, i.jsx)(b, {
        className: a()(g.pu, t),
        original: n,
        poster: (0, V.E)(l),
        src: (0, V.E)(u),
        alt: _,
        width: l.width,
        height: l.height,
        naturalHeight: u.height,
        naturalWidth: u.width,
        maxWidth: s,
        maxHeight: o,
        responsive: d,
        autoPlay: r,
        playable: h,
        renderImageComponent: c,
        hiddenSpoilers: p,
        disableAltTextDisplay: f,
        placeholder: E,
        placeholderVersion: m,
        sourceMetadata: A,
    });
}
class es extends r.PureComponent {
    static defaultProps = {
        hideMedia: !1,
        allowFullScreen: !0,
        maxThumbnailWidth: 80,
        maxThumbnailHeight: 80,
        embedIndex: 0,
    };
    state = {
        isVisible: null == this.props.obscureReason,
        videoControlsShown: !1,
        sourceMetadata: {
            message: this.props.message,
            identifier: { type: "embed", embedIndex: this.props.embedIndex },
        },
        ...(0, Y.ds)(this.props.embed),
    };
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: t },
                renderLinkComponent: n,
                message: r,
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: a()(g.zC, g.aK),
                    children: this.renderContentPlaceholder({ width: 80, height: 18 }),
                })
              : (0, i.jsx)("div", {
                    className: a()(g.zC, g.aK),
                    children:
                        null != t.url
                            ? n({
                                  className: g.Cj,
                                  href: t.url,
                                  tabIndex: e ? 0 : -1,
                                  children: t.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: r?.id,
                                  channelId: r?.channel_id,
                              })
                            : (0, i.jsx)("span", { children: t.name }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: t },
                renderLinkComponent: n,
                message: r,
                autoPlayGif: s,
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: a()(g.rN, g.aK),
                    children: this.renderContentPlaceholder({ width: 150, height: 18 }),
                })
              : (0, i.jsx)(J.Y.Consumer, {
                    children: (o) => {
                        let { disableAnimations: l } = o;
                        return (0, i.jsxs)("div", {
                            className: a()(g.rN, g.aK),
                            children: [
                                null != t.iconProxyURL
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          className: g.SG,
                                          src: s && !l ? t.iconProxyURL : en(t.iconProxyURL),
                                      })
                                    : null,
                                null != t.url
                                    ? n({
                                          className: g.av,
                                          href: t.url,
                                          tabIndex: e ? 0 : -1,
                                          children: t.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: r?.id,
                                          channelId: r?.channel_id,
                                      })
                                    : (0, i.jsx)("span", { className: g.QQ, children: t.name }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: t, height: n } = e;
        return (0, i.jsx)(M.FQ, { className: g.Jl, width: t, height: n, opacity: 0.3 });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: t, renderLinkComponent: n, renderTitle: r, message: s } = this.props,
            { rawTitle: o, url: l } = t;
        return null == o
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: a()(g.gt, g.aK),
                    children: this.renderContentPlaceholder({ width: 400, height: 30 }),
                })
              : (0, i.jsx)("div", {
                    className: a()(g.gt, g.aK),
                    children:
                        null != l
                            ? n({
                                  className: g.kv,
                                  href: l,
                                  tabIndex: e ? 0 : -1,
                                  children: r(t, o),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: s?.id,
                                  channelId: s?.channel_id,
                              })
                            : r(t, o),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: t } = this.props,
            { rawDescription: n } = e;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: a()(g.cD, g.aK),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({ width: 400, height: 50 })
                      : t(e, n, !1),
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: t },
                maxThumbnailWidth: n,
                maxThumbnailHeight: r,
                renderImageComponent: s,
                autoPlayGif: a,
            } = this.props,
            { sourceMetadata: o } = this.state;
        return null == t
            ? null
            : (0, i.jsx)(J.Y.Consumer, {
                  children: (i) => {
                      let { disableAnimations: l } = i;
                      return s({
                          containerClassName: g.ad,
                          src: (0, V.E)(t),
                          original: t.url,
                          width: t.width,
                          height: t.height,
                          maxWidth: n,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: a && !l,
                          srcIsAnimated: t.srcIsAnimated,
                          placeholder: t.placeholder,
                          placeholderVersion: t.placeholderVersion,
                          sourceMetadata: o,
                          analyticsSource: "Embed",
                      });
                  },
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: t } = e;
        if (null == t || 0 === t.length) return null;
        let n = [],
            r = null;
        return (
            t.forEach((t) => {
                let { rawName: i, rawValue: s, inline: a } = t;
                a || null == r || (n.push(r), (r = null)),
                    null == r && (r = []),
                    r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, s, !0)]),
                    (3 !== r.length && a) || (n.push(r), (r = null));
            }),
            null != r && n.push(r),
            (0, i.jsx)("div", {
                className: g.j0,
                children: n.map((e, t) => {
                    let { length: n } = e;
                    return e.map((e, r) => {
                        let s,
                            a,
                            [o, l] = e;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: g.Me,
                                style: { gridColumn: ((a = r * (s = 12 / n)), `${a + 1} / ${a + s + 1}`) },
                                children: [
                                    (0, i.jsx)("div", { className: g.$L, children: o }),
                                    (0, i.jsx)("div", { className: g.VN, children: l }),
                                ],
                            },
                            `${t}-${r}`,
                        );
                    });
                }),
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: t = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: n } = this.props,
            { maxMediaHeight: r } = this.state;
        if (null == n.images) return null;
        let [s, a, o, l] = n.images.map((i) =>
            this.renderImage({ hiddenSpoiler: e, isVisible: t, image: i, isGalleryImage: !0, allImages: n.images }),
        );
        return null == s && null == a && null == o && null == l
            ? null
            : (0, i.jsxs)("div", {
                  className: g.$B,
                  style: { height: r },
                  children: [
                      (0, i.jsxs)("div", {
                          className: g.Zf,
                          children: [
                              (0, i.jsx)(
                                  T.G.Provider,
                                  { value: (0, P.b)(n.images[0].url, n.images[0]), children: s },
                                  0,
                              ),
                              null != l &&
                                  (0, i.jsx)(
                                      T.G.Provider,
                                      { value: (0, P.b)(n.images[2]?.url, n.images[2]), children: o },
                                      2,
                                  ),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: g.Zf,
                          children: [
                              (0, i.jsx)(
                                  T.G.Provider,
                                  { value: (0, P.b)(n.images[1]?.url, n.images[1]), children: a },
                                  1,
                              ),
                              null == l &&
                                  null != o &&
                                  (0, i.jsx)(
                                      T.G.Provider,
                                      { value: (0, P.b)(n.images[2]?.url, n.images[2]), children: o },
                                      2,
                                  ),
                              null != l &&
                                  (0, i.jsx)(
                                      T.G.Provider,
                                      { value: (0, P.b)(n.images[3]?.url, n.images[3]), children: l },
                                      3,
                                  ),
                          ],
                      }),
                  ],
              });
    }
    handleImageHover() {
        let e = F.A.getChannel(this.props.message?.channel_id);
        B.default.track(_.HAw.IMAGE_HOVERED, {
            guild_id: e?.guild_id,
            channel_id: e?.id,
            image_recommendations_shown: !1,
        });
    }
    renderImage() {
        let {
                hiddenSpoiler: e = !1,
                isVisible: t = !0,
                image: n,
                isGalleryImage: r = !1,
                alt: s = O.intl.string(O.t.X4IxWL),
                allImages: o = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: l, className: u, autoPlayGif: c } = this.props,
            { maxMediaWidth: d, maxMediaHeight: _, sourceMetadata: f } = this.state;
        if (null == n) return null;
        let h = (0, V.E)(n),
            { srcToOnClickOverride: p, srcToHandlePreloadImage: E } =
                null == o
                    ? { srcToOnClickOverride: {}, srcToHandlePreloadImage: {} }
                    : (0, w.o)(
                          o.map((e) => ({
                              ...(0, S.oU)(e, f, "IMAGE"),
                              original: e.url,
                              srcIsAnimated: e.srcIsAnimated,
                          })),
                          {},
                          "Embed",
                      ),
            m = D.Ay.isAnimated({ src: (0, V.E)(n), original: n.url, animated: !1, srcIsAnimated: n.srcIsAnimated }),
            A = {
                containerClassName: a()(u, { [g.W$]: !r, [g.Lw]: !r, [g.I_]: r }),
                imageContainerClassName: r ? g.FM : void 0,
                imageClassName: r ? g.t3 : void 0,
                src: (0, V.E)(n),
                alt: null == n.description || "" === n.description ? s : n.description,
                responsive: !0,
                limitResponsiveWidth: !r,
                width: n.width,
                height: n.height,
                maxWidth: d,
                maxHeight: _,
                original: n.url,
                shouldLink: t,
                disableAltTextDisplay: null == n.description || "" === n.description,
                hiddenSpoilers: e,
                placeholder: n.placeholder,
                placeholderVersion: n.placeholderVersion,
                srcIsAnimated: n.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            I = n.url.split(".").pop()?.split("?")[0] ?? "";
        return (
            "jpg" === I && (I = "jpeg"),
            (0, i.jsx)(T.G.Consumer, {
                children: (t) =>
                    (0, i.jsx)(
                        J.Y.Consumer,
                        {
                            children: (n) => {
                                let { disableAnimations: i } = n;
                                return l({
                                    ...A,
                                    autoPlay: c && !i && !e,
                                    renderAccessory: m ? t : null,
                                    handlePreloadImage: E[h],
                                    onClick: p[h],
                                    onMouseEnter: () => this.handleImageHover(),
                                    sourceMetadata: f,
                                    analyticsSource: "Embed",
                                });
                            },
                        },
                        n.url,
                    ),
            })
        );
    }
    renderVideo() {
        let {
                gifv: e = !1,
                isVisible: t = !0,
                hiddenSpoiler: n = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: r, thumbnail: s, video: a, provider: o },
                renderVideoComponent: l,
                renderImageComponent: u,
                renderLinkComponent: c,
                allowFullScreen: d,
                autoPlayGif: _,
                obscureReason: f,
            } = this.props,
            { maxMediaWidth: h, maxMediaHeight: p, sourceMetadata: E } = this.state;
        if (null == r || null == s) return null;
        if (e)
            return null == a
                ? null
                : (0, i.jsx)(J.Y.Consumer, {
                      children: (e) => {
                          let { disableAnimations: o } = e;
                          return (0, i.jsx)(er, {
                              className: g.W$,
                              href: r,
                              thumbnail: s,
                              video: a,
                              maxWidth: h,
                              maxHeight: p,
                              responsive: !0,
                              autoPlay: !n && _ && !o && t,
                              renderImageComponent: u,
                              playable: t,
                              hiddenSpoilers: n,
                              disableAltTextDisplay: null != f,
                              placeholder: a.placeholder,
                              placeholderVersion: a.placeholderVersion,
                              sourceMetadata: E,
                          });
                      },
                  });
        let m = () => {
                this.setState({ videoControlsShown: !0 });
            },
            A = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, i.jsx)(ei, {
            className: g.W$,
            href: r,
            allowFullScreen: d,
            thumbnail: s,
            video: a,
            provider: (0, Y.QY)(o?.name, a?.url),
            maxWidth: h,
            maxHeight: p,
            responsive: !0,
            renderImageComponent: u,
            renderVideoComponent: l,
            renderLinkComponent: c,
            onControlsShow: m,
            onControlsHide: A,
            playable: t && !n,
            placeholder: a?.placeholder,
            placeholderVersion: a?.placeholderVersion,
            sourceMetadata: E,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: t, timestamp: n } = this.props.embed;
        return null != t
            ? (0, i.jsx)(J.Y.Consumer, {
                  children: (r) => {
                      let { disableAnimations: s } = r;
                      return (0, i.jsxs)("div", {
                          className: a()(g.te, g.aK),
                          children: [
                              null != t.iconProxyURL && "" !== t.iconProxyURL
                                  ? (0, i.jsx)("img", {
                                        alt: "",
                                        className: g.mG,
                                        src: e && !s ? t.iconProxyURL : en(t.iconProxyURL),
                                    })
                                  : null,
                              (0, i.jsxs)("span", {
                                  className: g.oy,
                                  children: [
                                      t.text,
                                      null != t.text && null != n
                                          ? (0, i.jsx)("span", { className: g.i8, children: "\u2022" })
                                          : null,
                                      null != n ? (0, j.mk)(n) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != n
              ? (0, i.jsx)("div", {
                    className: a()(g.te, g.aK),
                    children: (0, i.jsx)("span", { className: g.oy, children: (0, j.mk)(n) }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        let { className: e, embed: t } = this.props,
            { maxMediaWidth: n, maxMediaHeight: r } = this.state,
            s = t.image ?? t.video;
        if (null == s) return null;
        let { width: a, height: l } = (0, W.Uj)({ width: s.width, height: s.height, maxWidth: n, maxHeight: r });
        return (0, i.jsx)(o._, {
            className: e,
            readyState: _.Rv1.READY,
            src: "",
            width: a,
            height: l,
            maxWidth: n,
            maxHeight: r,
            mediaLayoutType: ee.dG.STATIC,
            useFullWidth: !1,
            zoomable: !1,
        });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: n } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (t.type) {
            case _.Auw.GIFV:
                return this.renderVideo({ gifv: !0, hiddenSpoiler: e, isVisible: n });
            case _.Auw.VIDEO:
            default:
                if (null != t.video) return this.renderVideo({ gifv: !1, hiddenSpoiler: e, isVisible: n });
                if (null != t.images) return this.renderImages({ hiddenSpoiler: e, isVisible: n });
                return this.renderImage({ hiddenSpoiler: e, isVisible: n, image: t.image, alt: t.rawTitle });
        }
    }
    renderAll() {
        let e,
            t,
            { embed: n, hideMedia: i } = this.props,
            { isVisible: r } = this.state,
            s = this.renderProvider(r),
            a = this.renderAuthor(r),
            o = this.renderTitle(r);
        switch (n.type) {
            case _.Auw.IMAGE:
            case _.Auw.VIDEO:
            case _.Auw.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let l = this.renderFields();
        i || (t = this.renderMedia(!r));
        let u = this.renderFooter(),
            c = null == t;
        return (
            n.type === _.Auw.RICH && (c = null == n.video),
            {
                provider: s,
                author: a,
                title: o,
                description: e,
                thumbnail: !i && c ? this.renderThumbnail(r) : null,
                fields: l,
                media: t,
                footer: u,
            }
        );
    }
    onReveal = () => {
        this.setState({ isVisible: !0 });
    };
    onToggleObscurity = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };
    getMaxWidth(e) {
        let {
                embed: { image: t, images: n, video: i, type: r, thumbnail: s },
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: o } = this.state,
            l = t ?? i;
        if (null == l) return;
        let { width: u } = (0, W.Uj)({ width: l.width, height: l.height, maxWidth: a, maxHeight: o });
        if (!e && (r === _.Auw.VIDEO || u >= 300)) return u + 32;
        if (r === _.Auw.RICH && void 0 !== n) return 520;
        if (r === _.Auw.GIFV) {
            let { width: e } = (0, W.Uj)({
                width: i?.width ?? s?.width ?? 0,
                height: i?.height ?? s?.height ?? 0,
                maxWidth: a,
                maxHeight: o,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e ? { minWidth: 150, minHeight: 144 } : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: t } = this.props;
        return !e && (0, Y.NV)(t);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(l.D, {
            focusProps: { offset: { bottom: 4 } },
            className: g.PP,
            onClick: e,
            "aria-label": O.intl.string(O.t.GT3fNz),
            children: (0, i.jsx)(u.P, { size: "xs", color: "currentColor" }),
        });
    }
    renderInlineMediaEmbed = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { obscureReason: n, className: r } = e.props,
                s = e.getMaxWidth(!0);
            return (0, i.jsx)("div", {
                "aria-hidden": t,
                className: a()(g.JY, r, {
                    [g.gT]: n === I.Oc.SPOILER,
                    [g.We]: e.shouldObscure,
                    [g.dK]: t,
                    [g.qU]: e.usesJustifiedAutoStyle(),
                }),
                style: { maxWidth: s },
                children: e.renderMedia(t),
            });
        };
    })();
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === _.Auw.IMAGE ||
            e.type === _.Auw.VIDEO ||
            e.type === _.Auw.GIFV ||
            ((e.type === _.Auw.RICH || e.type === _.Auw.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    renderEmbedContent = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { className: n, onSuppressEmbed: r, obscureReason: s } = e.props,
                {
                    provider: o,
                    author: l,
                    title: u,
                    description: c,
                    fields: d,
                    thumbnail: _,
                    media: f,
                    footer: h,
                } = e.renderAll();
            return (0, i.jsx)("article", {
                className: a()(n, g.vO, et.PT, {
                    [g.dK]: t,
                    [g.o4]: s === I.Oc.SPOILER,
                    [g.q$]: e.shouldObscure,
                    [g.qU]: e.usesJustifiedAutoStyle(),
                }),
                "aria-hidden": t,
                style: { borderLeftColor: e.getEmbedColor(t), maxWidth: e.getMaxWidth(!1) },
                children: (0, i.jsx)("div", {
                    className: g.UT,
                    children: (0, i.jsxs)("div", {
                        className: a()({ [g.Vg]: !0, [g.$H]: null != _ }),
                        children: [null != r ? e.renderSuppressButton(r) : null, o, l, u, c, d, f, _, h],
                    }),
                }),
            });
        };
    })();
    getEmbedColor(e) {
        let { color: t } = this.props.embed;
        return (null != t && "#ffffff" === t.toLowerCase()) || e ? void 0 : t;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: t, images: n, video: i, type: r, rawDescription: s },
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: o } = this.state;
        if (!this.usesJustifiedAutoStyle()) return { justifySelf: "start", alignSelf: "start" };
        let l = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === l && void 0 === n && r !== _.Auw.RICH) {
            let e = t ?? i;
            if (void 0 !== e) {
                let { minWidth: t, minHeight: n } = this.getMinSize() ?? {},
                    { width: i } = (0, W.Uj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: a,
                        maxHeight: o,
                        minWidth: t,
                        minHeight: n,
                    });
                l = i;
            }
        }
        let u = 150 / (c.A.fontScale / 100),
            d = null != s ? (0, K.W7)(s) : 0,
            f = (s?.split("\n").length ?? 0) >= 5;
        return { maxWidth: void 0 === l || d >= u || f ? "max-content" : l, justifySelf: "auto" };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && I._K.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        let { embed: e, obscureReason: t, className: n } = this.props;
        return null != e.provider && X.includes(e.provider.name)
            ? (0, i.jsx)(Q, { embed: e, className: n })
            : (function (e) {
                    if (null == e.url || e.provider?.name !== "Spotify" || e.type !== _.Auw.LINK) return !1;
                    try {
                        let t = d.parse(e.url, !0).host;
                        return U(t);
                    } catch (e) {
                        return !1;
                    }
                })(e)
              ? (0, i.jsx)(G, { embed: e, className: n })
              : e.provider?.name === "Amazon Music" && e.type === _.Auw.RICH
                ? (0, i.jsx)(C, { embed: e, className: n })
                : (function (e) {
                        if (
                            null == e.url ||
                            e.provider?.name !== "Apple Music" ||
                            (e.type !== _.Auw.ARTICLE && e.type !== _.Auw.LINK)
                        )
                            return !1;
                        try {
                            let t = d.parse(e.url, !0).host;
                            return f(t);
                        } catch (e) {
                            return !1;
                        }
                    })(e)
                  ? (0, i.jsx)(A, { embed: e, className: n })
                  : this.isInline()
                    ? null != t
                        ? (0, i.jsx)(x.Ay, {
                              type: x.Ay.Types.ATTACHMENT,
                              reason: t,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: a()({
                                  [g.yi]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != t
                      ? (0, i.jsx)(x.Ay, {
                            type: x.Ay.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: t,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
    }
}
