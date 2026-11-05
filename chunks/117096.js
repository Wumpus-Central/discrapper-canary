n.d(t, { A: () => la });
var i,
    s,
    l = n(477900),
    a = n(582128),
    r = n.t(a, 2),
    o = n(143413),
    c = n(350835),
    d = n(855986),
    u = n(192308),
    m = n(821609),
    x = n(117723),
    h = n(442433),
    g = n(138399),
    f = n(597798),
    A = n(401843),
    E = n(155718),
    _ = n(793574),
    p = n(384059),
    C = n(626584),
    I = n(233444),
    N = n(233824),
    j = n(447215),
    T = n(888675),
    v = n(976860),
    S = n(46653),
    O = n(696451),
    R = n(287809),
    y = n(654265),
    M = n(792996);
function b(e, t) {
    let { joinRequest: n, joinRequestGuild: i } = (0, y.A)(t.id),
        s = (0, d.bG)([R.default], () => R.default.getUser(n?.userId)),
        l = (0, j.P)({ user: s, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
        r = (0, d.bG)([O.Ay, S.default], () => O.Ay.isMember(i?.id, S.default.getId())),
        o = a.useCallback(() => {
            r && null != i && (0, v.uh)(i.id);
        }, [i, r]);
    return { guild: i, joinRequest: n, usernameHook: l, guildNameClick: o };
}
var L = n(164636),
    k = n(834730),
    D = n(775602),
    U = n(763754),
    P = n(953727);
function G(e) {
    let { width: t = 440, height: n = 200, avatar: i, ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, P.A)(s),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...s,
        children: [
            (0, l.jsx)("rect", { y: "12", width: "440", height: "176", rx: "4", fill: "url(#paint0_linear_0_1)" }),
            (0, l.jsx)("path", {
                d: "M4 12C1.79086 12 0 13.7909 0 16V87.7111C0 89.0292 0.644578 90.2711 1.75757 90.9773C19.6029 102.3 40.6908 102.01 54.593 95.3775C74.7698 85.8079 78.9758 61.6391 58.8478 45.7384C50.2069 38.7483 44.7223 29.0027 45.9176 20.7172C46.434 17.1376 44.0823 12 40.4657 12H4Z",
                fill: "#3442D9",
            }),
            (0, l.jsx)("path", {
                d: "M440 44.2244C440 42.4907 438.885 40.9507 437.228 40.4399C387.67 25.1621 330.882 28.8097 301.274 66.4895C271.113 104.874 240.425 106.271 206.014 93.988C172.008 81.8488 55.3406 98.3422 74.0098 184.887C74.3973 186.683 76.0228 188 77.8605 188H436C438.209 188 440 186.209 440 184V44.2244Z",
                fill: "#3442D9",
            }),
            (0, l.jsx)("path", {
                d: "M397.403 63.2537C395.463 62.0597 394.269 60.2687 393.97 58.0299L393.373 54.2985C393.373 54.1493 393.224 54 392.925 54C392.776 54 392.627 54.1493 392.627 54.2985L392.03 58.0299C391.731 60.2687 390.537 62.0597 388.597 63.2537L388.149 63.5522C388 63.7015 388 63.8507 388 64C388 64.1493 388 64.1493 388.149 64.2985L388.597 64.597C390.537 65.791 391.731 67.5821 392.03 69.8209L392.627 73.5522C392.627 73.8507 392.776 74 392.925 74C393.224 74 393.373 73.8507 393.373 73.5522L393.97 69.8209C394.269 67.5821 395.463 65.791 397.403 64.597L397.851 64.2985C398 64.1493 398 64.1493 398 64C398 63.8507 398 63.7015 397.851 63.5522L397.403 63.2537Z",
                fill: "#57F287",
            }),
            (0, l.jsx)("path", {
                d: "M300.628 164.106C299.09 163.2 298.013 161.691 297.705 159.879L297.244 156.86C297.244 156.71 297.09 156.559 296.936 156.559C296.782 156.559 296.628 156.71 296.628 156.86L296.167 159.879C296.013 161.691 294.936 163.2 293.398 164.106L292.936 164.408C292.782 164.559 292.782 164.559 292.782 164.71V165.011H293.244C294.782 165.917 295.859 167.577 296.013 169.389L296.475 172.408C296.475 172.559 296.628 172.559 296.782 172.559C296.936 172.559 297.09 172.559 297.09 172.408L297.551 169.389C297.859 167.577 298.936 166.068 300.475 165.011H300.782V164.71C300.782 164.559 300.782 164.408 300.628 164.408V164.106Z",
                fill: "#808AFF",
            }),
            (0, l.jsx)("path", {
                d: "M232.642 35.4003C231.478 34.6839 230.761 33.5197 230.582 32.1765L230.224 30.0272C230.224 29.8481 230.134 29.7585 229.955 29.7585C229.866 29.7585 229.776 29.8481 229.776 30.0272L229.418 32.1765C229.239 33.5197 228.522 34.6839 227.358 35.4003L227.09 35.5794C227 35.669 227 35.669 227 35.7585C227 35.8481 227 35.9376 227.09 35.9376L227.358 36.2063C228.522 36.9227 229.239 37.9974 229.418 39.3406L229.776 41.5794C229.776 41.669 229.866 41.7585 229.955 41.7585C230.134 41.7585 230.224 41.669 230.224 41.5794L230.582 39.3406C230.761 37.9974 231.478 36.9227 232.642 36.2063L232.91 35.9376C233 35.8481 233 35.8481 233 35.7585C233 35.669 232.91 35.669 232.91 35.5794L232.642 35.4003Z",
                fill: "#FFE75C",
            }),
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("linearGradient", {
                    id: "paint0_linear_0_1",
                    x1: "220",
                    y1: "12",
                    x2: "220",
                    y2: "188",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, l.jsx)("stop", { stopColor: "#686bff" }),
                        (0, l.jsx)("stop", { offset: "1", stopColor: "#c356fd" }),
                    ],
                }),
            }),
            (0, l.jsx)("svg", {
                width: 100,
                height: 100,
                viewBox: "-2 -15 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, l.jsxs)("g", {
                    clipPath: "url(#clip0_2645_182555)",
                    children: [
                        (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.6698 8.91016C14.5646 10.1567 16.3407 10.3342 17.4866 9.44283C17.4957 9.46624 17.5008 9.49191 17.5008 9.51916V15.8337C17.5008 17.2144 16.3815 18.3337 15.0008 18.3337H12.7092C12.5941 18.3337 12.5008 18.2404 12.5008 18.1253V13.3337C12.5008 12.4132 11.7547 11.667 10.8342 11.667H9.16748C8.24699 11.667 7.5008 12.4132 7.5008 13.3337V18.1253C7.5008 18.2404 7.40753 18.3337 7.29247 18.3337H5.0008C3.62009 18.3337 2.5008 17.2144 2.5008 15.8337V9.51916C2.5008 9.36341 2.66628 9.26158 2.81091 9.31949C3.23542 9.48933 3.70172 9.58366 4.19593 9.58366C5.27336 9.58366 6.24385 9.12583 6.92345 8.39408C7.0135 8.29708 7.17004 8.29679 7.26039 8.39349C7.94479 9.12583 8.91932 9.58366 10.0008 9.58366C11.0823 9.58366 12.0568 9.12583 12.7412 8.39349C12.8316 8.29679 12.9882 8.29708 13.0782 8.39408C13.2565 8.58599 13.4548 8.75916 13.6698 8.91016ZM11.7497 6.67891C9.42957 5.8204 9.4179 2.5511 11.7147 1.6683C11.699 1.66743 11.6833 1.66699 11.6675 1.66699H8.33415C7.87391 1.66699 7.50082 2.04009 7.50082 2.50033V5.83366C7.50082 5.87681 7.50191 5.9197 7.50407 5.96231C7.52181 6.31232 7.61153 6.64333 7.75873 6.94085C7.77282 6.96931 7.78743 6.99747 7.80255 7.02531C8.2259 7.80462 9.05157 8.33366 10.0008 8.33366C10.984 8.33366 11.8346 7.76614 12.2429 6.94084L12.2543 6.91751C12.2613 6.90286 12.2682 6.88812 12.2751 6.87331L11.7497 6.67891ZM15.8231 8.3336C15.4338 8.32949 15.0467 8.10931 14.8853 7.67305L14.4606 6.52524C14.2917 6.06904 13.9321 5.70936 13.4759 5.54055L13.3342 5.4881V2.84588L13.4759 2.79343C13.9321 2.62463 14.2917 2.26494 14.4606 1.80874L14.5131 1.66699H15.2462C16.3397 1.66699 17.3062 2.37762 17.6324 3.42131L18.1647 5.12491C18.2057 5.25598 18.2352 5.38724 18.254 5.51775L18.1924 5.54055C17.7361 5.70936 17.3765 6.06904 17.2077 6.52524L16.783 7.67305C16.627 8.09458 16.2603 8.31438 15.8847 8.33245C15.8642 8.33308 15.8437 8.33346 15.8231 8.3336ZM12.5008 3.15424V5.17974L12.3281 5.11583C11.4472 4.78989 11.4472 3.54409 12.3281 3.21816L12.5008 3.15424ZM4.75546 1.66699C3.662 1.66699 2.69541 2.37762 2.36926 3.4213L1.83688 5.12491C1.52876 6.11092 1.8679 7.1068 2.56708 7.72187C2.99643 8.09957 3.56156 8.33366 4.19593 8.33366C5.13437 8.33366 5.95065 7.81064 6.36917 7.04019C6.38619 7.00888 6.40255 6.97714 6.41823 6.94502C6.57788 6.618 6.66748 6.25052 6.66748 5.86211V2.50033C6.66748 2.04009 6.29438 1.66699 5.83415 1.66699H4.75546Z",
                            fill: "white",
                        }),
                        (0, l.jsx)("path", {
                            d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
                            fill: "white",
                        }),
                    ],
                }),
            }),
            (0, l.jsx)("foreignObject", { x: "30", y: "100", width: "56", height: "56", children: i }),
        ],
    });
}
var H = n(652215),
    w = n(21088);
function F(e) {
    let { guildId: t, user: n, username: i } = e,
        s = (0, L.bG)([D.Ay], () => !D.Ay.useReducedMotion),
        a = n.getAvatarURL(t, 56, s),
        r = (0, l.jsx)("img", { src: a, className: w.dj, alt: "" });
    return (0, l.jsxs)("div", {
        className: w.uE,
        role: "img",
        "aria-label": M.intl.formatToPlainString(M.t["utf8+W"], { username: i }),
        children: [
            (0, l.jsx)(G, { avatar: r }),
            (0, l.jsx)(k.E, {
                className: w.Bi,
                tag: "p",
                color: "status-positive-text",
                variant: "heading-xl/medium",
                children: M.intl.format(M.t["52BAtC"], {
                    username: i,
                    usernameHook: (e, t) =>
                        (0, l.jsx)(
                            k.E,
                            {
                                tag: "span",
                                color: "status-positive-text",
                                variant: "heading-xxl/semibold",
                                lineClamp: 3,
                                children: e,
                            },
                            t,
                        ),
                }),
            }),
        ],
    });
}
function V(e) {
    let { channel: t, message: i, compact: s } = e,
        a = (0, U.Ay)(i),
        r = (0, j.P)({ user: i.author, channelId: t.id, guildId: t.guild_id, messageId: i.id })(a),
        o = M.intl.format(M.t.TQs67g, {
            username: a.nick,
            usernameHook: r,
            productName: i.purchaseNotification?.guild_product_purchase?.product_name ?? "",
            handleProductListingClick: () => {
                (0, v.pX)(
                    H.BVt.GUILD_PRODUCT(t.guild_id, i.purchaseNotification?.guild_product_purchase?.listing_id ?? ""),
                );
            },
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(T.A, { icon: n(617184), timestamp: i.timestamp, compact: s, children: o }),
            (0, l.jsx)(F, { username: a.nick, guildId: t.guild_id, user: i.author }),
        ],
    });
}
var B = n(688810),
    J = n(942075),
    z = n(665260),
    Z = n(355622),
    K = n(148355),
    W = n(406704),
    X = n(576705),
    Y = n(129230),
    Q = n(811091),
    q = n(710272),
    $ = n(646405);
function ee(e) {
    let { assets: t, currentUser: n, message: i } = e,
        s = (Q.default.extractTimestamp(n.id) + Q.default.extractTimestamp(i.id)) % t.length;
    return t[s];
}
function et(e) {
    let { currentUser: t, channel: n, message: i, buttonLabels: s, stickers: r, event: o, eventProperties: c } = e,
        d = a.useMemo(() => ee({ assets: r, currentUser: t, message: i }), [r, t, i]),
        u = a.useMemo(() => ee({ assets: s, currentUser: t, message: i }), [s, t, i]),
        x = a.useCallback(async () => {
            let { valid: e } = await (0, q.i)({ type: Z.oU.FORM, content: "", channel: n });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: i } = e;
                    g.A.sendGreetMessage(
                        t.id,
                        i.id,
                        g.A.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0,
                        }),
                    );
                })({ channel: n, message: i, sticker: d }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n && Y.default.track(n, { ...i, sticker_id: t.id });
                })({ sticker: d, event: o, eventProperties: c }));
        }, [n, i, d, o, c]);
    return (0, l.jsx)(m.$, {
        icon: { type: "sticker", asset: d, component: K.A },
        text: u,
        onClick: x,
        variant: "secondary",
    });
}
function en(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: s, event: a, eventProperties: r } = e,
        o = R.default.getCurrentUser(),
        c = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, d.bG)([X.A, O.Ay], () => {
                let e = t.guild_id;
                if (null == i || null == e) return !1;
                let s = (0, W.UJ)(t),
                    l = X.A.can(H.xBc.SEND_MESSAGES, t),
                    a = O.Ay.getMember(e, i.id)?.isPending,
                    r = n.author.bot;
                return l && !s && !a && !r;
            });
        })({ channel: t, message: n, currentUser: o });
    return null != o && c
        ? (0, l.jsx)("div", {
              className: $.S,
              children: (0, l.jsx)(et, {
                  currentUser: o,
                  channel: t,
                  message: n,
                  buttonLabels: i,
                  stickers: s,
                  event: a,
                  eventProperties: r,
              }),
          })
        : null;
}
var ei = n(71393),
    es = n(226139);
function el(e) {
    let { channel: t, message: n } = e,
        i = n.roleSubscriptionData?.is_renewal ? (0, es.J9)() : (0, es.oL)(),
        s = t.guild_id,
        r = (0, d.bG)([ei.A], () => ei.A.getGuild(s)?.systemChannelFlags, [s]),
        o = null != r && (0, z.Lt)(r, H.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        c = a.useMemo(() => (0, J.y4)(t, n), [t, n]);
    return o
        ? null
        : (0, l.jsx)(en, {
              channel: t,
              message: n,
              buttonLabels: i,
              stickers: es.D3,
              event: H.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: c,
          });
}
var ea = n(772303);
function er(e) {
    let { guildId: t, user: n, className: i } = e,
        s = (0, d.bG)([D.Ay], () => !D.Ay.useReducedMotion),
        a = n.getAvatarURL(t, 56, s),
        r = (0, l.jsx)("foreignObject", {
            x: "30",
            y: "68",
            width: "56",
            height: "56",
            transform: "skewX(12)",
            children: (0, l.jsx)("img", { src: a, className: ea.dj, alt: "" }),
        });
    return (0, l.jsx)("div", {
        className: i,
        children: (0, l.jsxs)("svg", {
            width: "128",
            height: "200",
            viewBox: "0 0 128 200",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: ea.JW,
            children: [
                (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M41.6475 3.07525C42.2166 3.01705 42.7941 2.98723 43.3787 2.98723H44.0149C51.1639 2.98723 57.3812 8.03091 58.5312 14.9582L58.5326 14.9664L71.1297 85.803L74.1529 85.2934L61.5601 14.4815C61.5597 14.4786 61.5592 14.4758 61.5587 14.4729C60.1604 6.07701 52.6392 0 44.0149 0H42.997C42.4189 0 41.8467 0.037182 41.283 0.10879C31.6239 1.11743 24.0326 9.0199 24.0326 18.799C24.0326 21.3525 24.5847 23.8942 25.5481 26.1672L25.5512 26.1745L25.5543 26.1817C30.6753 37.9136 33.7197 47.8651 33.2106 58.7186C32.7013 69.5731 28.6272 81.5075 19.156 97.1507C9.58001 112.967 1.96875 129.323 0.328288 144.93C-1.32267 160.636 3.084 175.549 17.4069 188.258C44.018 211.936 78.8775 196.708 84.4502 170.024C87.2081 156.818 84.3006 145.78 79.001 135.687C75.0979 128.255 69.8387 121.246 64.61 114.277C62.8057 111.873 61.0052 109.473 59.2652 107.063C52.5319 97.7348 49.6357 89.4917 48.5724 81.9158C47.538 74.5461 48.2262 67.7588 48.9086 61.0273C48.9314 60.803 48.9541 60.5787 48.9768 60.3545C50.4158 46.1192 45.9689 34.8772 40.4143 27.5533L40.4092 27.5466L34.5424 19.988L34.533 19.9764C30.8561 15.4298 31.6398 8.83644 36.3021 5.27079C37.8665 4.11054 39.7105 3.32756 41.6475 3.07525ZM29.4797 10.5429C27.9714 12.9383 27.1008 15.7614 27.1008 18.799C27.1008 20.9399 27.5653 23.0928 28.3813 25.0206C33.564 36.8951 36.8159 47.3374 36.2756 58.8549C35.7352 70.3737 31.4122 82.7904 21.7991 98.6677C12.2907 114.372 4.95262 130.278 3.38056 145.234C1.81906 160.089 5.93633 174.039 19.4752 186.051L19.4768 186.053C44.2662 208.11 76.329 193.919 81.4435 169.429C84.0293 157.047 81.3387 146.702 76.2691 137.047C72.4865 129.844 67.4387 123.116 62.2536 116.205C60.4212 113.762 58.5717 111.297 56.7549 108.78C49.7474 99.0725 46.6638 90.3811 45.5325 82.3203C44.4482 74.5953 45.1687 67.4973 45.8457 60.8276C45.8717 60.5718 45.8976 60.3165 45.9233 60.0619C47.2829 46.613 43.0814 36.1022 37.951 29.3343L32.1127 21.8124C29.4463 18.5078 28.6103 14.3561 29.4797 10.5429Z",
                    fill: "#57F287",
                }),
                (0, l.jsx)("path", {
                    d: "M59.282 31.4071C56.8646 29.0585 57.1191 27.3279 58.0097 24.7321C58.1369 24.2377 58.6458 23.9905 59.1548 23.9905H62.9716V31.4071H59.282Z",
                    fill: "#57F287",
                }),
                (0, l.jsx)("path", {
                    d: "M125.569 155.388L122.388 158.601C120.734 160.332 118.317 161.321 115.899 161.321H101.268V135.486H125.569L127.859 147.971C128.368 150.69 127.477 153.41 125.569 155.388Z",
                    fill: "#8CD9FF",
                }),
                (0, l.jsx)("path", {
                    d: "M29.2561 45.6221L25.8209 49.0832C23.9125 51.0609 23.0219 53.9039 23.5308 56.6233L26.7115 74.6704H45.4142V45.6221H29.2561Z",
                    fill: "#8CD9FF",
                }),
                (0, l.jsx)("path", {
                    d: "M124.551 151.061C125.568 155.635 122.515 160.208 117.68 161.197C117.044 161.321 116.281 161.445 115.645 161.321H52.7936C46.6867 161.074 41.4703 156.871 40.198 151.061L23.531 56.7471C22.5132 52.1735 25.5667 47.6 30.4014 46.6111C31.0375 46.4875 31.8009 46.3639 32.437 46.4875H95.288C101.395 46.7347 106.611 50.9374 107.884 56.7471L124.551 151.061Z",
                    fill: "#8CD9FF",
                }),
                (0, l.jsx)("path", {
                    d: "M127.732 147.724C128.749 152.297 125.823 156.747 121.243 157.736C120.479 157.86 119.716 157.984 118.826 157.984H55.9745C49.8676 157.86 44.6512 153.534 43.3789 147.724L26.7119 53.5333C25.6941 48.9598 28.7476 44.3862 33.5823 43.3973C34.2184 43.2737 34.9818 43.1501 35.6179 43.2737H98.5962C104.703 43.3973 109.92 47.7237 111.065 53.5333L127.732 147.724Z",
                    fill: "white",
                }),
                (0, l.jsx)("path", {
                    d: "M78.7482 52.1736C79.2571 54.893 77.4759 57.6124 74.6769 58.1068C74.2952 58.2304 73.7863 58.2304 73.4046 58.2304H66.0253C62.4629 58.1068 59.4094 55.6346 58.6461 52.1736L55.3381 33.7557C54.8292 31.0363 56.6104 28.3169 59.4094 27.8225C59.7911 27.6989 60.3 27.6989 60.6817 27.6989H68.061C71.6234 27.8225 74.6769 30.2947 75.4402 33.7557L78.7482 52.1736Z",
                    fill: "black",
                }),
                (0, l.jsx)("path", {
                    d: "M115.39 139.071C115.899 142.285 113.736 145.375 110.428 145.87C109.919 145.993 109.537 145.993 109.028 145.993H62.7172C58.5186 145.87 54.829 143.027 53.9384 139.071C53.3022 135.857 55.4651 132.767 58.7731 132.149C59.282 132.025 59.7909 132.025 60.2998 132.025H106.611C110.81 132.149 114.499 134.992 115.39 139.071Z",
                    fill: "#FFC619",
                }),
                (0, l.jsx)("path", {
                    d: "M71.4152 52.8176C72.7444 51.4082 72.394 48.9945 70.6325 47.4264C68.8711 45.8582 66.3656 45.7295 65.0364 47.1389C63.7072 48.5482 64.0576 50.9619 65.819 52.5301C67.5805 54.0982 70.086 54.2269 71.4152 52.8176Z",
                    fill: "#5865F2",
                }),
                (0, l.jsx)("path", {
                    d: "M68.5697 30.9126C68.4425 31.1598 68.188 31.4071 67.9336 31.4071H60.8088C60.4271 31.4071 60.2998 31.1598 60.2998 31.0362C60.2998 30.9126 60.2998 30.9126 60.1726 30.9126V30.6654C60.1726 30.5418 60.1726 30.2946 60.2998 30.171C61.5721 27.0807 60.6815 25.5974 59.1548 24.4849V23.9905H64.3712C64.7529 23.9905 65.1345 23.9905 65.389 24.2377C67.9336 25.5974 70.0965 26.7099 68.5697 30.9126Z",
                    fill: "#57F287",
                }),
                (0, l.jsx)("path", {
                    d: "M63.4808 19.4171H59.155C58.7734 19.4171 58.5189 19.788 58.6461 20.0352L59.2823 23.9907H64.2442L63.4808 19.4171Z",
                    fill: "black",
                }),
                (0, l.jsx)("path", {
                    d: "M61.1485 21.3944C62.4818 21.3286 63.5224 20.5015 63.4728 19.547C63.4231 18.5925 62.302 17.872 60.9686 17.9378C59.6353 18.0035 58.5947 18.8306 58.6444 19.7851C58.694 20.7396 59.8152 21.4601 61.1485 21.3944Z",
                    fill: "black",
                }),
                r,
            ],
        }),
    });
}
var eo = n(746080),
    ec = n(738390);
function ed(e) {
    let { username: t } = e;
    return (0, l.jsx)("div", {
        className: ec._X,
        children: (0, l.jsx)(k.E, {
            tag: "p",
            className: ec._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: M.intl.format(M.t.MLKSln, {
                username: t,
                usernameHook: (e, t) =>
                    (0, l.jsx)(
                        k.E,
                        {
                            tag: "span",
                            color: "status-positive-text",
                            variant: "heading-xxl/semibold",
                            lineClamp: 3,
                            children: e,
                        },
                        t,
                    ),
            }),
        }),
    });
}
function eu(e) {
    let { guildId: t, user: n, username: i } = e;
    return (0, l.jsxs)("div", {
        className: ec.pG,
        role: "img",
        "aria-label": M.intl.formatToPlainString(M.t["utf8+W"], { username: i }),
        children: [(0, l.jsx)(er, { guildId: t, user: n, className: ec.sz }), (0, l.jsx)(ed, { username: i })],
    });
}
var em = n(698441),
    ex = n(484724),
    eh = n(727419),
    eg = n(125858),
    ef = n(369606),
    eA = n(646514),
    eE = n(378570),
    e_ = n(49303),
    ep = n(523154),
    eC = n(518782),
    eI = n(135294),
    eN = n(318626);
function ej(e) {
    let { message: t, channel: n, compact: i } = e,
        s = n.guild_id,
        r = t.guildSpaceData?.leaderboard,
        o = a.useMemo(() => (0, eC.Nu)(r), [r]),
        c = o?.userId,
        u = o?.secondaryUserId,
        [m, x] = (0, d.yK)([R.default], () => [R.default.getUser(c), R.default.getUser(u)], [c, u]),
        h = a.useMemo(() => (0, ep.U_)(o, m, x), [o, m, x]),
        g = h?.subject ?? null,
        f = h?.previousLeader ?? null,
        A = (0, U.d8)(g, n),
        E = (0, U.d8)(f, n),
        _ = (0, j.P)({ user: g ?? void 0, channelId: n.id, guildId: s, messageId: t.id })(A),
        p = (0, j.P)({ user: f ?? void 0, channelId: n.id, guildId: s, messageId: t.id })(E),
        C = a.useCallback(() => {
            null != s &&
                ((0, e_.jb)(s, e_.Rk.LEADERBOARD_SYSTEM_MESSAGE),
                (0, eE.vn)(s, eo.VV.GUILD_SPACE, { source: "Leaderboard System Message" }));
        }, [s]);
    if (null == h || null == s) return null;
    let I = M.intl.string(M.t.sKdZ6U),
        N = "";
    h.data.event === eC.zu.LEADER_CHANGED && (N = null != f ? E.nick : I);
    let v = (0, ep.Sx)(h.data, { username: null != g ? A.nick : I, previousUsername: N });
    if (null == v) return null;
    let S = h.data.event === eC.zu.COMPETITION_ENDED,
        O = M.intl.format(v.message, {
            ...v.values,
            usernameHook: S
                ? (e, t) =>
                      (0, l.jsxs)(
                          a.Fragment,
                          {
                              children: [
                                  _(e, t),
                                  (0, l.jsx)("span", {
                                      className: eN.UT,
                                      children: (0, l.jsx)(eg.b, { width: 16, height: 16, alt: "", ariaHidden: !0 }),
                                  }),
                              ],
                          },
                          t,
                      )
                : _,
            previousUsernameHook: p,
        });
    return (0, l.jsxs)(T.A, {
        iconNode: (0, l.jsx)(ef.TrophyIcon, { size: "sm", color: eA.A.colors.ICON_MUTED }),
        timestamp: t.timestamp,
        compact: i,
        children: [O, (0, l.jsx)(T.A.Action, { onClick: C, children: M.intl.string(eI.default.O1h3uU) })],
    });
}
var eT = n(432017),
    ev = n(949744),
    eS = n(72216),
    eO = n(825476);
function eR(e) {
    let { message: t, channel: n, compact: i } = e,
        s = n.guild_id,
        r = (0, eO.x)(t.guildSpaceData?.music),
        o = r?.userId,
        c = (0, d.bG)([R.default], () => R.default.getUser(o));
    a.useEffect(() => {
        null != s && null != o && ev.A.requestMember(s, o);
    }, [s, o]);
    let u = (0, U.d8)(c, n),
        m = (0, j.P)({ user: c, channelId: n.id, guildId: s, messageId: t.id })(u),
        x = a.useCallback(() => {
            null != s &&
                ((0, e_.jb)(s, e_.Rk.MUSIC_SYSTEM_MESSAGE),
                (0, eE.vn)(s, eo.VV.GUILD_SPACE, { source: "Music System Message" }));
        }, [s]);
    if (null == r || null == s) return null;
    let h = (0, eS.O)(r, null != c ? u.nick : null);
    return null == h
        ? null
        : (0, l.jsxs)(T.A, {
              iconNode: (0, l.jsx)(eT.MusicIcon, { size: "xs" }),
              timestamp: t.timestamp,
              compact: i,
              children: [
                  M.intl.format(h.message, { ...h.values, usernameHook: m }),
                  (0, l.jsx)(T.A.Action, { onClick: x, children: M.intl.string(M.t.RzWDqY) }),
              ],
          });
}
var ey = n(193885),
    eM = n(403362);
let eb = function (e) {
    let { message: t, channel: n, compact: i, data: s } = e,
        r = (0, d.yK)(
            [R.default],
            () =>
                s.sampled_user_ids
                    .map((e) => R.default.getUser(e))
                    .filter(eM.Vq)
                    .slice(0, 2),
            [s.sampled_user_ids],
        ),
        [o, c] = r,
        u = (0, U.d8)(o, n),
        m = (0, U.d8)(c, n),
        x = (0, j.P)({ user: o, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
        h = (0, j.P)({ user: c, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
        g = n.guild_id,
        f = a.useCallback(() => {
            null != g && (0, v.pX)(H.BVt.CHANNEL(g, eo.VV.GUILD_SPACE));
        }, [g]),
        A = s.connected_user_count - r.length,
        E = 0 === r.length || A <= 0;
    return (0, l.jsxs)(T.A, {
        iconNode: (0, l.jsx)(ey.PaintbrushThinIcon, { size: "xs" }),
        compact: i,
        timestamp: t.timestamp,
        children: [
            E
                ? M.intl.string(eI.default.Sxxqdx)
                : M.intl.format(eI.default.fcmI49, {
                      displayCount: r.length,
                      username: u.nick,
                      usernameHook: x(u),
                      username2: m.nick,
                      username2Hook: h(m),
                      additionalCount: A,
                  }),
            null != g ? (0, l.jsx)(T.A.Action, { onClick: f, children: M.intl.string(M.t.RzWDqY) }) : null,
        ],
    });
};
var eL = n(503698),
    ek = n.n(eL),
    eD = n(23339),
    eU = n(642846),
    eP = n(565645),
    eG = n(306417);
n(412136);
var eH = n(11057);
function ew() {
    return (0, l.jsx)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: eA.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
        "aria-hidden": !0,
        children: (0, l.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
            fill: "currentColor",
        }),
    });
}
function eF(e) {
    let t,
        { hasNoVotes: n, victorEmoji: i } = e;
    if (n) t = (0, l.jsx)(ew, {});
    else if (null != i) {
        let e = "" !== i.name ? i.name : i.displayName;
        t = (0, l.jsx)(eP.A, { emojiId: i.id, emojiName: e, animated: i.animated });
    }
    return null != t ? (0, l.jsx)("div", { className: eH.ZS, children: t }) : null;
}
function eV(e) {
    let t,
        { type: n, ...i } = e,
        s = "text-muted";
    switch (n) {
        case "NO_VOTES":
            t = (0, l.jsx)(k.E, {
                variant: "body-sm/semibold",
                color: "text-default",
                scaleFontToUserSetting: !0,
                children: M.intl.string(M.t["a+lSZ/"]),
            });
            break;
        case "VICTOR":
            let { victorAnswerText: a, victorVotePercentage: r } = i;
            t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: eH.sj,
                        children: [
                            (0, l.jsx)(k.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                className: eH.Dq,
                                scaleFontToUserSetting: !0,
                                children: a,
                            }),
                            (0, l.jsx)(eG.Vx, { size: 16, className: eH.To, isVictor: !0, isExpired: !0 }),
                        ],
                    }),
                    (0, l.jsxs)(k.E, {
                        variant: "body-xs/medium",
                        color: s,
                        scaleFontToUserSetting: !0,
                        children: [M.intl.string(M.t.ufIDIx), " \u2022 ", r, "%"],
                    }),
                ],
            });
            break;
        case "TIE":
            let { tiedVotePercentage: o } = i;
            t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(k.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        scaleFontToUserSetting: !0,
                        children: M.intl.string(M.t.kPN9si),
                    }),
                    (0, l.jsxs)(k.E, {
                        variant: "body-xs/medium",
                        color: s,
                        scaleFontToUserSetting: !0,
                        children: [o, "%"],
                    }),
                ],
            });
    }
    return (0, l.jsx)("div", { className: eH.h_, children: t });
}
function eB(e) {
    let { className: t, data: n, onClickPollLink: i } = e,
        s = a.useMemo(
            () =>
                (function (e) {
                    if (0 === e.totalVotes) return { type: "NO_VOTES" };
                    let t = null != e.victorAnswerId,
                        n = e.totalVotes > 0 ? Math.round((e.victorAnswerVotes / e.totalVotes) * 100) : 0;
                    return t
                        ? { type: "VICTOR", victorAnswerText: e.victorAnswerText, victorVotePercentage: n }
                        : { type: "TIE", tiedVotePercentage: n };
                })(n),
            [n],
        ),
        r = null != n.victorEmoji || "NO_VOTES" === s.type;
    return (0, l.jsxs)("div", {
        className: ek()(eH.kL, { [eH.FS]: r }, t),
        children: [
            (0, l.jsx)(eF, { hasNoVotes: "NO_VOTES" === s.type, victorEmoji: n.victorEmoji }),
            (0, l.jsx)(eV, { ...s }),
            null != i &&
                (0, l.jsx)(m.$, { size: "sm", onClick: i, variant: "secondary", text: M.intl.string(M.t.Jw7Vbf) }),
        ],
    });
}
var eJ = n(435558),
    ez = n(403581),
    eZ = n(331322),
    eK = n(805251),
    eW = n(863574);
n(327113);
var eX = n(166403),
    eY = n(188567),
    eQ = n(856383),
    eq = n(427262),
    e$ = n(573359),
    e0 = n(59784),
    e1 = n(728666),
    e2 = n(88001),
    e3 = n(107198),
    e7 = n(387993),
    e6 = n(421438);
function e5(e) {
    let { disabled: t, invite: i, isExistingSub: s } = e;
    return (0, l.jsx)(m.$, {
        variant: "expressive",
        size: "md",
        text: M.intl.string(e3.default.rjuKse),
        icon: ez.NitroWheelIcon,
        onClick: function () {
            if (null == i) return;
            let e = i.subscription,
                t = i.id,
                a = R.default.getUser(i.primary_user);
            if (null == a) return;
            let r = (0, eq.$3)(a);
            Y.default.track(H.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, { invite_id: t, subscription_id: e });
            let o = (0, eJ.uniqueId)("premium-group-accept-invite-modal"),
                c = !1;
            (0, u.mM)(
                async () => {
                    let { default: i } = await Promise.all([n.e(56498), n.e(134068)]).then(n.bind(n, 428959));
                    return (n) =>
                        (0, l.jsx)(i, {
                            ...n,
                            premiumGroupSubscriptionId: e,
                            premiumGroupInviteId: t,
                            premiumGroupPrimaryName: r,
                            isExistingSub: s,
                            onClose: async () => {
                                c ||
                                    ((c = !0),
                                    eY._.dispatch(H.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                    e$.A.isDisplayingWowMomentConfirmation && e$.A.isAnimated
                                        ? setTimeout(() => {
                                              n.onClose();
                                          }, 1e3)
                                        : await n.onClose());
                            },
                        });
                },
                {
                    onCloseRequest: () => {
                        c ||
                            ((c = !0),
                            eY._.dispatch(H.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                            e$.A.isDisplayingWowMomentConfirmation && e$.A.isAnimated
                                ? setTimeout(() => {
                                      (0, u.Oo)(o);
                                  }, 1e3)
                                : (0, u.Oo)(o));
                    },
                    modalKey: o,
                },
            );
        },
        disabled: t,
    });
}
function e9(e) {
    let { disabled: t, invite: i, channel: s } = e;
    return (0, l.jsx)(m.$, {
        variant: "secondary",
        size: "md",
        text: M.intl.string(e3.default["eYHh+z"]),
        onClick: function () {
            if (null == i || !s.isDM())
                return void eQ.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                    extra: {
                        inviteIsNull: null == i,
                        channelIsDM: s.isDM(),
                        channelId: s.id,
                        subscriptionGroupMemberId: i?.id,
                        subscriptionId: i?.subscription,
                        primaryUserId: i?.primary_user,
                    },
                });
            let e = s.getRecipientId(),
                t = R.default.getUser(e);
            null != t &&
                (Y.default.track(H.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                    invite_id: i.id,
                    subscription_id: i.subscription,
                    invited_user_id: e,
                }),
                (0, u.mM)(async () => {
                    let { default: e } = await n.e(815554).then(n.bind(n, 115225));
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            subscriptionId: i.subscription,
                            invitedUser: t,
                            subscriptionGroupMemberId: i.id,
                        });
                }));
        },
        disabled: t,
    });
}
function e8(e) {
    let { message: t, header: n, body: i, compact: s, actionButton: a } = e;
    return (0, l.jsxs)(T.A, {
        className: e7.og,
        compact: s,
        iconNode: (0, l.jsx)(ez.NitroWheelIcon, { size: "md", color: eA.A.colors.ICON_STRONG }),
        children: [
            (0, l.jsx)(k.E, { variant: "body-md/medium", color: "text-strong", children: t }),
            (0, l.jsxs)(eZ.B, {
                direction: "horizontal",
                className: e7.x,
                children: [
                    (0, l.jsx)("img", { src: e6, alt: "", className: e7.Sl }),
                    (0, l.jsxs)("div", {
                        className: e7.Qs,
                        children: [
                            (0, l.jsx)(eK.E, { type: "beta", variant: "expressive" }),
                            (0, l.jsx)("h2", { className: e7.DD, children: n }),
                            (0, l.jsx)(k.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
                            null != a && (0, l.jsx)("div", { className: e7.UD, children: a }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let e4 = function (e) {
    let { message: t, channel: n, compact: i } = e,
        s = t.premiumGroupInviteId,
        {
            inviteState: a,
            isFetching: r,
            invite: o,
            currentUser: c,
            premiumSubscription: u,
        } = (0, d.cf)(
            [e0.A, R.default, eX.A],
            () => ({
                inviteState: null != s ? e0.A.getInviteState(s) : e2.xI.NOT_FOUND,
                isFetching: null != s && e0.A.isFetching(s),
                invite: null != s ? e0.A.getInvite(s)?.invite : null,
                currentUser: R.default.getCurrentUser(),
                premiumSubscription: eX.A.getPremiumSubscription(),
            }),
            [s],
        );
    if (null == c) return null;
    let m = t.author,
        x = c.id === m.id;
    if (r || a === e2.xI.FETCHING || a === e2.xI.UNKNOWN) return (0, l.jsx)(eW.W, { isHorizontal: !0 });
    let h = (0, e1.o1)({ sender: m, channel: n, isSender: x, inviteState: a });
    if (null == h) return null;
    let g = a === e2.xI.PENDING,
        f = null;
    return (
        (f = x
            ? g
                ? (0, l.jsx)(e9, { disabled: !1, invite: o, channel: n })
                : a === e2.xI.REMOVED
                  ? (0, l.jsx)(e9, { disabled: !0, invite: o, channel: n })
                  : null
            : (0, l.jsx)(e5, { disabled: !g, invite: o, isExistingSub: null != u })),
        (0, l.jsx)(e8, { message: h.message, header: h.header, body: h.body, compact: i, actionButton: f })
    );
};
var te = n(536637),
    tt = n.n(te),
    tn = n(607399),
    ti = n(251843),
    ts = n(534514),
    tl = n(778705),
    ta = n(5377),
    tr = n(975571),
    to = n(722178),
    tc = n(851746),
    td = n(727949);
n(664654);
var tu = n(303682),
    tm = n(465794),
    tx = n(378135),
    th = n(682901),
    tg = n(953081),
    tf = n(954457);
class tA extends a.Component {
    trialOffer;
    referralsSent;
    currentUser;
    recipientHasNitro;
    trialEndsAt;
    analyticsLocations;
    offerExpired;
    isSender;
    compact;
    constructor(e) {
        (super(e),
            (this.trialOffer = e.trialOffer),
            (this.referralsSent = e.referralsSent),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, tx.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrerId));
    }
    getSystemMessageHeader() {
        let e = R.default.getUser(this.trialOffer.userId);
        if (this.isSender) return M.intl.format(M.t["4/EMxl"], { receiver: e?.username });
        let t = R.default.getUser(this.trialOffer.referrerId),
            n = t?.username !== void 0 ? t.username : "";
        return M.intl.format(M.t.yisueA, { sender: n, helpdeskArticle: tr.A.getArticleURL(H.MVz.REFERRAL_PROGRAM) });
    }
    getTitleText() {
        let e = R.default.getUser(this.trialOffer.userId),
            t = null != e ? e.username : "???",
            n = R.default.getUser(this.trialOffer.referrerId),
            i = null != n ? n.username : "???";
        return this.recipientHasNitro && !this.trialOffer.isRedeemed
            ? M.intl.formatToPlainString(M.t["Mptau/"], { username: t })
            : this.offerExpired
              ? this.isSender
                  ? M.intl.string(M.t["9SNdf4"])
                  : M.intl.formatToPlainString(M.t["H0+MxK"], { userName: i })
              : M.intl.formatToPlainString(M.t.IiWKwg, { senderUserName: i, recipientUserName: t });
    }
    getBodyText() {
        return !this.recipientHasNitro || this.isSender || this.trialOffer.isRedeemed
            ? this.offerExpired
                ? null
                : M.intl.string(M.t.lQLlOb)
            : M.intl.format(M.t.LwCwT9, { helpdeskArticle: tr.A.getArticleURL(H.MVz.REFERRAL_PROGRAM) });
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.userId ||
                (0, to.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, tx.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, l.jsxs)("div", {
            className: tg.UD,
            children: [
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(m.$, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: M.intl.string(M.t.O0etsF),
                        onClick: () => {
                            (0, tl.A)({
                                initialPlanId: null,
                                subscriptionTier: th.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trialId,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, l.jsx)(k.E, { variant: "body-xs/semibold", color: "none", className: tg.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (e.isRedeemed && !this.isSender && null !== t)
            return M.intl.formatToPlainString(M.t.nP0ivR, { date: (0, ta.i$)(tt()(t), "LL") });
        if (this.recipientHasNitro || null == e.expiresAt) return null;
        let n = tt()(e.expiresAt);
        return this.offerExpired
            ? M.intl.formatToPlainString(M.t.PuSHfU, { date: (0, ta.i$)(tt()(n), "LL") })
            : (0, td.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, l.jsx)("div", { className: tg.Qj });
    }
    render() {
        let e = () => {
                let e = R.default.getUser(this.trialOffer.userId),
                    t = null != e ? e.username : "???",
                    n = R.default.getUser(this.trialOffer.referrerId),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && !this.trialOffer.isRedeemed)
                        return {
                            headerText: M.intl.formatToPlainString(M.t.qABVhL, { recipient: t }),
                            bodyText: M.intl.formatToPlainString(M.t.u7hyDx, {
                                helpdeskArticle: tr.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: M.intl.string(M.t.LAGZfq),
                            bodyText: M.intl.formatToPlainString(M.t["0gnFLC"], { recipient: t }),
                        };
                return this.offerExpired
                    ? {
                          headerText: M.intl.string(M.t.nYvpUl),
                          bodyText: M.intl.formatToPlainString(M.t.wJdBEZ, { sender: i }),
                      }
                    : {
                          headerText: M.intl.string(M.t.HtTvXA),
                          bodyText: M.intl.formatToPlainString(M.t.wOQByA, { sender: i }),
                      };
            },
            t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(tm.A, {
                        disabled: this.offerExpired,
                        subscriptionTier: th.pe.TIER_2,
                        buttonTextOverride: M.intl.string(M.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, l.jsx)(k.E, {
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            i = (0, l.jsx)(m.$, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    (function (e) {
                        let { analyticsLocations: t, startingScreen: i } = e;
                        (Y.default.track(H.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, u.mM)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                return (t) => (0, l.jsx)(e, { ...t, startingScreen: i });
                            }));
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            3 === this.referralsSent.size
                                ? tu.SelectFriendsModalScreens.REMINDER
                                : tu.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: M.intl.string(M.t.Lm2nFc),
            }),
            s = this.isSender ? i : t,
            a = (0, l.jsx)(ti._, { src: tf.A, height: 84, width: 144, className: tg.ms }),
            { headerText: r, bodyText: o } = e();
        return (0, l.jsxs)(T.A, {
            className: tg.SB,
            iconNode: (0, l.jsx)(ez.NitroWheelIcon, { size: "md", color: eA.A.colors.ICON_STRONG }),
            iconContainerClassName: tg.J5,
            compact: this.compact,
            children: [
                (0, l.jsx)(k.E, {
                    variant: "body-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, l.jsxs)("div", {
                    className: tg.i2,
                    children: [
                        a,
                        (0, l.jsxs)("div", {
                            className: tg.KX,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: tg.xJ,
                                    children: [
                                        (0, l.jsx)(ts.D, {
                                            variant: "heading-sm/semibold",
                                            color: "text-strong",
                                            children: r,
                                        }),
                                        (0, l.jsx)(k.E, {
                                            variant: "body-md/medium",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: tg.ox, children: s }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function tE(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        {
            trialOffer: s,
            isResolving: a,
            referralsSent: r,
        } = (0, d.cf)(
            [tc.A],
            () => ({
                trialOffer: n ? tc.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && tc.A.isResolving(t),
                referralsSent: tc.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        o = R.default.getCurrentUser(),
        c = (0, d.bG)(
            [R.default],
            () => null != s && (0, to.TW)(void 0 !== o && s.userId === o.id ? o : R.default.getUser(s.userId)),
        ),
        u = (0, d.bG)([eX.A], () => (c ? eX.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: m } = (0, B.Ay)(_.A.SHARE_NITRO_EMBED);
    return a
        ? (0, l.jsx)(eW.W, { isHorizontal: !tn.Fr })
        : n && null != s && void 0 !== o
          ? (0, l.jsx)(tA, {
                trialOffer: s,
                referralsSent: r,
                currentUser: o,
                recipientHasNitro: c,
                trialEndsAt: u,
                analyticsLocations: m,
                compact: i,
            })
          : (0, l.jsx)("div", { className: tg.TU, children: (0, l.jsx)("div", { className: tg.Gq }) });
}
var t_ = n(638916),
    tp = n(834516),
    tC = n(28863),
    tI = n(342296),
    tN = n(486020),
    tj = n(552691);
function tT(e, t) {
    let n = a.useRef(null);
    return a.useCallback(
        (i) => (s, a) => {
            let r = tN.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, bot: i.bot, botIconFirst: !0 }),
                { bot: o } = i;
            return null == o
                ? s
                : (0, l.jsx)(
                      tI.A,
                      {
                          targetElementRef: n,
                          userId: o.id,
                          avatarUrl: r,
                          guildId: e.guild_id,
                          channelId: e.id,
                          messageId: t.id,
                          clickTrap: !0,
                          children: (e) => (0, l.jsx)(tC.Anchor, { ...e, ref: n, children: s }),
                      },
                      a,
                  );
        },
        [e, t.id],
    );
}
var tv = n(448761),
    tS = n(215026),
    tO = n(905499),
    tR = n(60270),
    ty = n(241326),
    tM = n(478016),
    tb = n(307805);
let tL = {
        [tv.l.REPORT_TO_MOD_BAN_USER]: () => tb.default.komFTv,
        [tv.l.REPORT_TO_MOD_KICK_USER]: () => tb.default.FAJmJV,
        [tv.l.REPORT_TO_MOD_TIMEOUT_USER]: () => tb.default["90r/sR"],
    },
    tk = {
        [tv.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => tb.default["4023i8"],
        [tv.l.REPORT_TO_MOD_CLOSED_REPORT]: () => tb.default.UE81zV,
    };
function tD(e) {
    let { type: t } = e,
        n = null;
    switch (t) {
        case tv.l.REPORT_TO_MOD_BAN_USER:
            n = tS.HammerIcon;
            break;
        case tv.l.REPORT_TO_MOD_KICK_USER:
            n = tO.UserMinusIcon;
            break;
        case tv.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = tR.ClockWarningIcon;
            break;
        case tv.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = ty.TrashIcon;
            break;
        case tv.l.REPORT_TO_MOD_CLOSED_REPORT:
            n = tM.CheckmarkSmallIcon;
    }
    return null != n ? (0, l.jsx)(n, { size: "refresh_sm", color: "currentColor" }) : null;
}
function tU(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s, mentions: a, type: r } = t,
        o = (0, U.Ay)(t),
        c = t.getChannelId(),
        u = (0, d.bG)([R.default], () => R.default.getUser(a[0]), [a]),
        m = (0, U.m2)(s, n),
        x = (0, j.P)({ user: s, channelId: c, guildId: n.guild_id, messageId: t.id })(m),
        h = (0, U.d8)(u, n),
        g = (0, j.P)({ user: u, channelId: c, guildId: n.guild_id, messageId: t.id })(h),
        f = tL[r] ?? null;
    if (null == f) return null;
    let A = M.intl.format(f(), { actorName: o.nick, actorHook: x, targetName: h?.nick, targetHook: g });
    return (0, l.jsx)(T.A, { iconNode: (0, l.jsx)(tD, { type: r }), timestamp: t.timestamp, compact: i, children: A });
}
function tP(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s, type: a } = t,
        r = (0, U.Ay)(t),
        o = t.getChannelId(),
        c = (0, U.m2)(s, n),
        d = (0, j.P)({ user: s, channelId: o, guildId: n.guild_id, messageId: t.id })(c),
        u = tk[a] ?? null;
    if (null == u) return null;
    let m = M.intl.format(u(), { actorName: r.nick, actorHook: d });
    return (0, l.jsx)(T.A, { iconNode: (0, l.jsx)(tD, { type: a }), timestamp: t.timestamp, compact: i, children: m });
}
function tG(e) {
    let { message: t, channel: n, compact: i } = e,
        { type: s } = t;
    return s === tv.l.REPORT_TO_MOD_BAN_USER ||
        s === tv.l.REPORT_TO_MOD_KICK_USER ||
        s === tv.l.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, l.jsx)(tU, { message: t, channel: n, compact: i })
        : (0, l.jsx)(tP, { message: t, channel: n, compact: i });
}
var tH = n(849736),
    tw = n(63995),
    tF = n(105530),
    tV = n(353202),
    tB = n(747926);
let tJ = [
    { id: "749054660769218631", format_type: 3, description: "Wumpus waves hello", name: "Wave" },
    {
        id: "751606379340365864",
        format_type: 3,
        description: "Nelly peeks around a wall and waves hello",
        name: "Wave",
    },
    { id: "754108890559283200", format_type: 3, description: "Clyde cheerfully waving", name: "Wave" },
    { id: "781291131828699156", format_type: 2, description: "Choco waves in greeting", name: "Wave" },
    { id: "816087792291282944", format_type: 3, description: "Doggo spins and greets you", name: "Sup" },
    { id: "819128604311027752", format_type: 3, description: "Peach raising her arms in distress", name: "Scream" },
];
var tz = n(179847);
function tZ(e) {
    var t;
    let n,
        i,
        { channel: s, message: r } = e,
        o =
            ((t = r.id),
            (i =
                ((null != (n = R.default.getCurrentUser()?.id) ? Q.default.extractTimestamp(n) : 0) +
                    Q.default.extractTimestamp(t)) %
                tJ.length),
            tJ[i]),
        c = a.useCallback(() => {
            (0, q.i)({ type: Z.oU.FORM, content: "", channel: s }).then((e) => {
                let { valid: t } = e;
                if (t) {
                    var n;
                    ((n = o.id),
                        g.A.sendGreetMessage(
                            s.id,
                            n,
                            g.A.getSendMessageOptionsForReply({
                                channel: s,
                                message: r,
                                shouldMention: !0,
                                showMentionToggle: !0,
                            }),
                        ),
                        Y.default.track(H.HAw.WELCOME_CTA_CLICKED, {
                            is_reply: !0,
                            sticker_id: n,
                            target_user: r.author.id,
                            sender: R.default.getCurrentUser()?.id,
                        }));
                }
            });
        }, [s, r, o]);
    return (0, l.jsx)("div", {
        className: tz.T,
        children: (0, l.jsx)(m.$, {
            icon: { type: "sticker", asset: o, component: K.A },
            text: M.intl.string(M.t["7Tj6HT"]),
            onClick: c,
            variant: "secondary",
        }),
    });
}
function tK(e) {
    let { message: t, channel: n } = e,
        i = n.getGuildId(),
        s = (0, d.bG)([R.default, X.A, ei.A, O.Ay], () => {
            let e = R.default.getCurrentUser(),
                s = (0, W.UJ)(n),
                l = X.A.can(H.xBc.SEND_MESSAGES, n),
                a = null != i && null != e && O.Ay.getMember(i, e.id)?.isPending,
                r = t.author.bot,
                o = ei.A.getGuild(i),
                c = null != o && (o.systemChannelFlags & H.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
            return l && !s && !a && !r && c;
        });
    return null != i && s ? (0, l.jsx)(tZ, { message: t, channel: n }) : null;
}
var tW = n(470710),
    tX = n(734057),
    tY = n(290863),
    tQ = n(309010),
    tq = n(977997),
    t$ = n(562153),
    t0 = n(782603),
    t1 = n(613412),
    t2 = n(778712),
    t3 = n(214947),
    t7 = n(597770),
    t6 = n(966327),
    t5 = n(139286),
    t9 = n(812020),
    t8 = n(242874),
    t4 = n(884883),
    ne = n(51501),
    nt = n(620301),
    nn = n(690802);
let ni = (0, t2.FT)(t2._3.SIZE_56),
    ns = (0, t2.FT)(t2._3.SIZE_24);
function nl(e) {
    let { user: t, ariaLabel: n, showCutout: i } = e,
        s = a.useId(),
        r = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : ni - ns - -2,
        o = ni - ns - -3;
    return (0, l.jsxs)("svg", {
        width: ni,
        height: ni,
        viewBox: `0 0 ${ni} ${ni}`,
        className: nn.XH,
        children: [
            i &&
                (0, l.jsxs)("mask", {
                    id: s,
                    maskUnits: "userSpaceOnUse",
                    children: [
                        (0, l.jsx)("rect", { x: 0, y: 0, width: ni, height: ni, fill: "white" }),
                        (0, l.jsx)("circle", { cx: r + ns / 2, cy: o + ns / 2, r: ns / 2 + 2, fill: "black" }),
                    ],
                }),
            (0, l.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: ni,
                height: ni,
                mask: i ? `url(#${s})` : void 0,
                children: (0, l.jsx)(t6.A, { className: nn.A6, user: t, "aria-label": n, size: t2._3.SIZE_56 }),
            }),
        ],
    });
}
function na(e) {
    let { giftIntentType: t, recipientUser: i, analyticsPage: s, analyticsSection: r, innerRef: o } = e,
        c = (0, d.bG)([R.default], () => R.default.getCurrentUser()),
        { analyticsLocations: x } = (0, B.Ay)(_.A.PREMIUM_GIFT_INTENT_CARD),
        h = (0, d.bG)([t4.A], () => t4.A.getFriendAnniversaryYears(i.id)),
        g = (0, ne.$u)(t),
        { openGiftModal: f } = (0, nt.$)({
            giftRecipient: i,
            analyticsLocations: x,
            analyticsLocation: g.chat,
            analyticsObject: { page: s, section: r, object: H.ZSU.BUTTON_CTA, objectType: H.btD.GIFT },
            location: "gift-intent-card",
        });
    function A() {
        switch (t) {
            case th.np.FRIEND_ANNIVERSARY:
                return M.intl.string(M.t.ilhtIa);
            case th.np.UNSPECIFIED:
                return;
            default:
                return (0, t8.yE)(t);
        }
    }
    return (
        a.useEffect(() => {
            (0, t5.x)({
                name: t1.ImpressionNames.GIFT_INTENT_CARD,
                type: t1.ImpressionTypes.VIEW,
                properties: { gift_intent_type: t, num_friend_anniversaries: t4.A.getFriendAnniversaries().length },
            });
        }, [t]),
        (0, l.jsx)("div", {
            ref: o,
            className: nn.Qs,
            children: (0, l.jsxs)("div", {
                className: nn.gx,
                children: [
                    (0, l.jsxs)("div", {
                        className: nn.ou,
                        children: [
                            (0, l.jsxs)("div", {
                                className: nn.HD,
                                children: [
                                    (0, l.jsx)(nl, { user: i, ariaLabel: i.username, showCutout: null != c }),
                                    null != c &&
                                        (0, l.jsx)(t6.A, {
                                            className: nn.GM,
                                            user: c,
                                            "aria-label": i.username,
                                            size: t2._3.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: nn.FS,
                                children: [
                                    (0, l.jsx)(k.E, {
                                        variant: "body-md/medium",
                                        color: "text-strong",
                                        lineClamp: 3,
                                        children: (function () {
                                            switch (t) {
                                                case th.np.FRIEND_ANNIVERSARY:
                                                    return M.intl.string(M.t.CeQIwZ);
                                                case th.np.UNSPECIFIED:
                                                    return;
                                                default:
                                                    return (0, t8.yE)(t);
                                            }
                                        })(),
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: nn.jA,
                                        children: [
                                            (0, l.jsx)(t3.FriendsIcon, { size: "xs" }),
                                            (0, l.jsx)(k.E, {
                                                className: nn.Tm,
                                                variant: "body-md/normal",
                                                color: "text-subtle",
                                                lineClamp: 1,
                                                children: (function () {
                                                    switch (t) {
                                                        case th.np.FRIEND_ANNIVERSARY:
                                                            return M.intl.formatToPlainString(M.t.PpG27s, {
                                                                numberOfYears: h,
                                                            });
                                                        case th.np.UNSPECIFIED:
                                                            return;
                                                        default:
                                                            return (0, t8.yE)(t);
                                                    }
                                                })(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: nn.UD,
                        children: [
                            (0, l.jsx)(m.$, {
                                size: "sm",
                                variant: "secondary",
                                text: M.intl.string(M.t.nffuyb),
                                "aria-label": M.intl.string(M.t.nffuyb),
                                onClick: (e) => {
                                    (e.stopPropagation(),
                                        Y.default.track(H.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: "send_message",
                                            location_stack: x,
                                        }),
                                        (0, u.mM)(async () => {
                                            let { default: e } = await Promise.all([n.e(780509), n.e(695501)]).then(
                                                n.bind(n, 367516),
                                            );
                                            return (n) =>
                                                (0, l.jsx)(e, {
                                                    ...n,
                                                    giftIntentType: t,
                                                    analyticsLocationHistory: x,
                                                    recipient: i,
                                                });
                                        }));
                                },
                            }),
                            (0, l.jsx)(m.$, {
                                size: "sm",
                                variant: "expressive",
                                text: A(),
                                icon: t7.GiftIcon,
                                "aria-label": A(),
                                onClick: function (e) {
                                    e.stopPropagation();
                                    let n = t9.A.getUserAffinity(i.id);
                                    (Y.default.track(H.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                                        gift_intent_type: t,
                                        affinity: n?.dmProbability,
                                        location_stack: x,
                                    }),
                                        f());
                                },
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var nr = n(147036),
    no = n(36889);
function nc(e) {
    let { giftIntentType: t, recipientUser: n, channel: i } = e;
    return (0, l.jsx)(T.A, {
        contentClassName: no.o9,
        iconContainerClassName: no.zc,
        iconNode: (0, l.jsx)(t0.BellIcon, { colorClass: no.Kk }),
        children: (0, l.jsx)(na, {
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, nr.DJ)(i),
            analyticsSection: H.JJy.CHANNEL,
        }),
    });
}
var nd = n(74096),
    nu = n(862482),
    nm = n(725807),
    nx = n(900443);
function nh(e) {
    let { message: t, channel: n } = e,
        i = null != n.guild_id ? H.JJy.TEXT_IN_VOICE : H.JJy.CHANNEL_TEXT_AREA;
    return (0, l.jsx)(T.A, {
        contentClassName: nx.o9,
        iconContainerClassName: nx.zc,
        iconNode: (0, l.jsx)(t0.BellIcon, { colorClass: nx.Kk }),
        children: (0, l.jsxs)("div", {
            className: nx.kL,
            children: [
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(k.E, { variant: "body-sm/medium", children: t.content }),
                        (0, l.jsxs)("div", {
                            className: nx.C5,
                            children: [
                                (0, l.jsx)(ez.NitroWheelIcon, { size: "xs", colorClass: nx.bu }),
                                (0, l.jsx)(k.E, {
                                    variant: "body-xs/medium",
                                    className: nx.vp,
                                    children: M.intl.string(M.t["BMw+7I"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: nx.UD,
                    children: (0, l.jsx)(nm.A, {
                        showGradient: !0,
                        iconClassName: nx.PC,
                        subscriptionTier: th.pe.TIER_2,
                        textOptions: { textOverride: M.intl.string(M.t.Y2WKTl) },
                        size: nu.$n.Sizes.SMALL,
                        premiumModalAnalyticsLocation: { section: i, object: H.ZSU.MESSAGE },
                    }),
                }),
            ],
        }),
    });
}
var ng = n(538355),
    nf = n(812299);
function nA(e) {
    let { message: t, compact: i, appNameHook: s, addingUser: r, addingUserHook: o } = e,
        c = (0, U.Ay)(t),
        d = s(c);
    function u(e, n) {
        return (0, l.jsxs)(
            a.Fragment,
            {
                children: [
                    d(e, `${n}-name`),
                    (0, nf.y)({ message: t, user: t.author, channel: void 0, compact: !1, isRepliedMessage: !1 }),
                ],
            },
            n,
        );
    }
    let m =
        null != r
            ? M.intl.format(M.t["/qIck6"], { username: r.nick, usernameHook: o(r), appName: c.nick, appNameHook: u })
            : M.intl.format(M.t.LlJum4, { appName: c.nick, appNameHook: u });
    return (0, l.jsx)(T.A, { icon: n(617184), timestamp: t.timestamp, compact: i, children: m });
}
var nE = n(837381),
    n_ = n(933832),
    np = n(138134),
    nC = n(866665),
    nI = n(231483),
    nN = n(123292),
    nj = n(709066),
    nT = n(845625),
    nv = n(449585),
    nS = n(179832),
    nO = n(362280),
    nR = n(589022),
    ny = n(354777),
    nM = n(367513),
    nb = n(47167),
    nL = n(332173),
    nk = n(95701),
    nD = n(994500),
    nU = n(449054);
function nP(e) {
    let { channel: t, onClick: n, beforeTransition: i, className: s, openChatWithoutConnecting: a } = e,
        r = (0, d.bG)([R.default, nD.A], () => (null == t ? "" : (0, nb.m1)(t, R.default, nD.A)), [t]);
    return (0, l.jsx)(nC.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: r,
        position: "top",
        children: (0, l.jsx)(nL.A, {
            role: "link",
            className: s,
            onClick: (e) => {
                (e.stopPropagation(),
                    null != n
                        ? n()
                        : (null != i && i(),
                          (0, u.s7)(),
                          (function (e, t) {
                              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              if (null == e || null == t) return;
                              let i = ei.A.getGuild(e);
                              if (i?.joinedAt == null) return nU.Z2(e, {}, { channelId: t });
                              let s = tX.A.getChannel(t);
                              if (null != s && (0, nk.ay)(s.type)) {
                                  if (n) {
                                      (nM.A.updateChatOpen(s.id, !0), (0, v.pX)(H.BVt.CHANNEL(e, t)));
                                      return;
                                  }
                                  f.default.selectVoiceChannel(s.id);
                                  return;
                              }
                              (0, v.pX)(H.BVt.CHANNEL(e, t));
                          })(t?.guild_id, t?.id, a)));
            },
            iconType: (0, nr.QG)(t),
            children: r,
        }),
    });
}
var nG = n(491182),
    nH = n(549587),
    nw = n(868892);
function nF(e) {
    let {
            message: t,
            channel: n,
            content: i,
            className: s,
            compact: a,
            popoutProps: r,
            hideTimestamp: o = !1,
            withFooter: c = !1,
            ...d
        } = e,
        u = (0, U.Ay)(t);
    return (0, l.jsx)("div", {
        className: ek()({ [nw.Ym]: c }, nw.gD, { [nw.oE]: a }, s),
        children: (0, l.jsx)(nG.A, {
            ...d,
            className: ek()(nw.zC, { [nw.oE]: a }),
            childrenMessageContent: (0, l.jsx)(nd.Ay, {
                className: ek()(nw.__invalid_messageContent, { [nw.oE]: a }),
                message: t,
                content: i,
                compact: a ?? !1,
            }),
            childrenHeader: (0, l.jsx)(nH.Ay, {
                message: t,
                channel: n,
                author: u,
                guildId: n?.guild_id,
                compact: a,
                hideTimestamp: o,
                className: ek()(nw.wx, { [nw.oE]: a }),
                ...(r ?? {}),
            }),
            compact: a,
            author: u,
        }),
    });
}
var nV = n(54391),
    nB = n(21299),
    nJ = n(754459),
    nz = n(97808),
    nZ = n(9320),
    nK = n(253400),
    nW = n(6829);
let nX = nK.Ay.getEnableHardwareAcceleration() ? nz.Js : nz.eu;
function nY() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = a.useState(!1),
        i = (0, d.bG)([D.Ay], () => D.Ay.useReducedMotion),
        s = a.useMemo(() => {
            let n = t || (!i && !e);
            return (0, nZ.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: s,
        eventHandlers: { onMouseEnter: a.useCallback(() => n(!0), []), onMouseLeave: a.useCallback(() => n(!1), []) },
    };
}
function nQ(e) {
    let { src: t } = e;
    return (0, l.jsx)("div", {
        className: nW.H,
        children: (0, l.jsx)(nX, { src: t, size: t2._3.SIZE_40, "aria-label": M.intl.string(M.t.hG1StD) }),
    });
}
var nq = n(381941),
    n$ = n(705751),
    n0 = n(200700);
function n1(e, t) {
    let { popouts: n, selected: i, setPopout: s } = (0, nJ.A)(e.id, nq.Fd),
        { usernameProfile: l, avatarProfile: r } = n,
        o = (0, nB.r4)(e.author.id, t.id),
        c = (0, nB.UY)(e.author.id, t.id, e.id),
        d = (0, nB.m)(e, t, l, s);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: (0, nB.Jo)(r, s),
        onPopoutRequestClose: a.useCallback(
            () => s({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
            [s],
        ),
        renderPopout: nV.A,
        showAvatarPopout: r,
        showUsernamePopout: l,
    };
}
function n2(e, t, n) {
    return a.useMemo(() => {
        if (null != t && null != n)
            return (i) => (0, l.jsx)(nR.A, { ...i, user: t, currentUser: n, guildId: e.guild_id, channelId: e.id });
    }, [e, t, n]);
}
function n3(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, l.jsx)("div", { className: ek()(nW.xQ, n, { [nW.oE]: i }), children: t });
}
function n7(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: ek()(nW.A3, n), children: t });
}
function n6(e) {
    switch (e) {
        case nT.G.DELETE_USER_MESSAGE:
            return (0, l.jsx)(ty.TrashIcon, { size: "xs", color: "currentColor", className: nW.yr });
        case nT.G.SET_COMPLETED:
            return (0, l.jsx)(n_.CheckmarkLargeIcon, {
                size: "xs",
                color: "currentColor",
                className: ek()(nW.yr, nW.r0),
            });
        case nT.G.SUBMIT_FEEDBACK:
            return (0, l.jsx)(np.FlagIcon, { size: "xs", color: "currentColor", className: nW.yr });
        default:
            return null;
    }
}
function n5(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, d.bG)([R.default], () => R.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return n6(e);
        let s = (function (e, t, n) {
            let i = t$.Ay.getNickname(n, null, t) ?? eq.Ay.getUserTag(t),
                s = tt()(e.ts),
                l = `${i} ${s.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case nT.G.DELETE_USER_MESSAGE:
                        return M.intl.formatToPlainString(M.t.BtKE9h, { userName: i, timestamp: s.fromNow() });
                    case nT.G.SET_COMPLETED:
                        return M.intl.formatToPlainString(M.t.dyo9US, { userName: i, timestamp: s.fromNow() });
                    case nT.G.SUBMIT_FEEDBACK:
                        return M.intl.formatToPlainString(M.t["C9/kIO"], { userName: i, timestamp: s.fromNow() });
                    default:
                        return l;
                }
            } catch (e) {
                return l;
            }
        })(t, i, n);
        return (0, l.jsx)(nC.m, { text: s, children: n6(e) });
    } catch (e) {
        return null;
    }
}
function n9(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        i = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, l.jsx)("div", {
        className: nW.q_,
        children: i.map((e) => (0, l.jsx)(n5, { alertAction: e, guildId: n }, e.actionType)),
    });
}
let n8 = a.memo(function (e) {
    let t,
        { message: n, channel: i, embedChannel: s, compact: a, interactionUserId: r } = e,
        o = n1(n, i),
        c = n2(i, n.author),
        d = (0, U.Ay)(n),
        u = (0, nH.tO)({ message: n, channel: i, author: d, guildId: i?.guild_id, compact: a, ...o }, c),
        m = R.default.getUser(r),
        x = n1(n, i),
        h = n2(i, m, R.default.getCurrentUser());
    if (null != m) {
        let e = (0, U.FT)(m, i),
            s = (0, nH.tO)({ message: n, channel: i, author: e, guildId: i?.guild_id, compact: a, ...x }, h);
        t = () => s;
    }
    return (0, l.jsx)(k.E, {
        variant: "body-md/normal",
        color: "text-strong",
        tag: "span",
        className: nW.he,
        children: (0, I.fu)(
            n,
            s,
            function () {
                return (0, l.jsx)("div", {
                    className: nW.aT,
                    children: (0, l.jsx)(nP, { channel: s, className: nW.HA, openChatWithoutConnecting: !0 }),
                });
            },
            function () {
                return u;
            },
            t,
        ),
    });
});
function n4(e) {
    let { id: t, compact: n, message: i, channel: s } = e,
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c },
        } = nY(!0),
        { onFocus: u, ...m } = (0, nE.rm)(t ?? ""),
        { isFocused: x, handleFocus: h, handleBlur: g } = (0, nB.G8)(u),
        A = (0, d.bG)([D.Ay], () => D.Ay.keyboardModeEnabled),
        E = (0, d.bG)([X.A], () => X.A.can(H.xBc.MANAGE_MESSAGES, s), [s]),
        {
            ruleName: _,
            embedChannel: p,
            decisionId: C,
            keywordMatchedContent: N,
            keyword: j,
            content: v,
            flaggedMessageId: S,
            timeoutDuration: O,
            decisionReason: R,
            alertActionsExecution: y,
            quarantineType: b,
            interactionUserId: L,
        } = (0, I.Ay)(i),
        U = a.useMemo(() => (0, ny.Tz)(v, N, s.id), [v, N, s]),
        { selected: P, ...G } = n1(i, s),
        w = a.useCallback(() => {
            (0, nv.w2)(i.id, v, C, s);
        }, [i.id, v, C, s]),
        F = a.useCallback(
            (e) => {
                null != S &&
                    null != p &&
                    (e.stopPropagation(), e.preventDefault(), (0, nO.A)(H.BVt.CHANNEL(p?.guild_id, p?.id, S)));
            },
            [p, S],
        ),
        V = a.useCallback(
            (e) => {
                null != p &&
                    (f.default.selectChannel({ guildId: p.guild_id, channelId: e, messageId: i.id }), (0, eE.iN)(e));
            },
            [i, p],
        ),
        B = a.useCallback(() => {
            (0, nS.E5)(i.id, s, nT.G.DELETE_USER_MESSAGE);
        }, [s, i.id]),
        J = (0, n0.getFriendlyDurationString)(Number(O)),
        z = null != R,
        Z = E && null != S && (null == y || !y.actions.hasOwnProperty(nT.G.DELETE_USER_MESSAGE)),
        K = i.embeds.length > 0 ? i.embeds[0].fields.find((e) => "channel_id" === e.rawName)?.rawValue : null,
        W = null != K;
    return (0, l.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, l.jsx)(T.A, {
            className: ek()(nW.rs, { [nW.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nQ, { src: r }),
            iconContainerClassName: nW.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: ek()(nW.Qs, { [nW.oE]: n }),
                children: [
                    (0, l.jsx)(nH.ix, {
                        message: i,
                        messageClassname: nW.he,
                        className: ek()(nW.QV, nW.he, { [nW.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: nW.he,
                            children: [
                                (0, l.jsx)(k.E, {
                                    variant: "body-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: nW.Xh,
                                    children: M.intl.string(M.t.hG1StD),
                                }),
                                (0, l.jsx)(nj.A, { type: n$.nu.SYSTEM_DM, className: nW.Al }),
                                (0, l.jsx)(n8, {
                                    message: i,
                                    channel: s,
                                    embedChannel: p,
                                    compact: n,
                                    interactionUserId: L,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: ek()(nW.BK, { [nW.oE]: n }),
                        children: (0, l.jsx)(nF, {
                            ...m,
                            message: i,
                            channel: p,
                            content: U,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: ek()(nW.gD, {
                                [nW.oE]: n,
                                [nW.wH]: P || (A && x),
                                [nW.JD]: null != S && null != p,
                            }),
                            childrenAccessories: (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: nW.Y4,
                                        children: [
                                            null != j &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsx)(k.E, {
                                                            variant: "body-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            children: M.intl.format(M.t.SYIUTR, { keyword: j }),
                                                        }),
                                                        (0, l.jsx)("div", { className: ek()(nW.Om, nW.Gx) }),
                                                    ],
                                                }),
                                            null != _ &&
                                                (0, l.jsx)(k.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-muted",
                                                    tag: "span",
                                                    children: M.intl.format(M.t.ZoOyKB, { ruleName: _ }),
                                                }),
                                            null != J &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsx)("div", { className: ek()(nW.Om, nW.Gx) }),
                                                        (0, l.jsx)(k.E, {
                                                            variant: "body-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: nW.__invalid_footerText,
                                                            children: M.intl.format(M.t["3LYql6"], { duration: J }),
                                                        }),
                                                    ],
                                                }),
                                            null != b &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsx)("div", { className: ek()(nW.Om, nW.Gx) }),
                                                        (0, l.jsx)(k.E, {
                                                            variant: "body-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: nW.nx,
                                                            children: M.intl.format(M.t["26bB2M"], {
                                                                reason: (0, I.o2)(b),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    z
                                        ? (0, l.jsx)(n7, {
                                              children: (0, l.jsx)(k.E, {
                                                  variant: "body-xs/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  children: R,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            popoutProps: G,
                            zalgo: !0,
                            onFocus: h,
                            onBlur: g,
                            onClick: F,
                        }),
                    }),
                    (0, l.jsx)(n3, {
                        compact: n,
                        children: (0, l.jsxs)("div", {
                            className: ek()(nW.Y4, nW.UD, { [nW.oE]: n }),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: nW.AX,
                                    children: [
                                        (0, l.jsx)(nI.ShieldIcon, {
                                            size: "xs",
                                            color: eA.A.unsafe_rawColors.BRAND_500.css,
                                            className: nW.Dq,
                                        }),
                                        (0, l.jsx)(nN.Q, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "body-xs/normal",
                                            text: M.intl.string(M.t.DEoVWZ),
                                            onClick: function (e) {
                                                G.onContextMenuModerateUser?.(e);
                                            },
                                        }),
                                    ],
                                }),
                                W
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", { className: nW.Om }),
                                              (0, l.jsx)("div", {
                                                  className: nW.AX,
                                                  children: (0, l.jsx)(nN.Q, {
                                                      onClick: () => V(K),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "body-xs/normal",
                                                      text: M.intl.string(M.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, l.jsx)("div", { className: nW.Om }),
                                (0, l.jsx)("div", {
                                    className: nW.AX,
                                    children: (0, l.jsx)(nN.Q, {
                                        onClick: w,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "body-xs/normal",
                                        text: M.intl.string(M.t["94JbM3"]),
                                    }),
                                }),
                                Z
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", { className: nW.Om }),
                                              (0, l.jsx)("div", {
                                                  className: nW.AX,
                                                  children: (0, l.jsx)(nN.Q, {
                                                      onClick: B,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "body-xs/normal",
                                                      text: M.intl.string(M.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != y ? (0, l.jsx)(n9, { alertActionsExecution: y, guildId: s.guild_id }) : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
var ie = n(718564),
    it = (((i = {}).JOIN_RAID = "JOIN_RAID"), (i.DM_RAID = "DM_RAID"), (i.MENTION_RAID = "MENTION_RAID"), i),
    ii = n(695366),
    is = n(848847),
    il = n(939249),
    ia = n(953822),
    ir = n(585510),
    io = n(903093),
    ic = n(735699),
    id = n(854627),
    iu = n(474352);
function im() {
    return (0, l.jsx)("div", { className: iu.Om });
}
function ix(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, I.Bk)(t);
    switch (i) {
        case void 0:
        case ie.W.RAID:
            return (0, l.jsx)(iE, { message: t, compact: n });
        case ie.W.MENTION_RAID:
            return (0, l.jsx)(i_, { message: t, compact: n });
        case ie.W.ACTIVITY_ALERTS_ENABLED:
            return (0, l.jsx)(iA, { message: t, compact: n });
        case ie.W.INTERACTION_BLOCKED:
            return (0, l.jsx)(ig, { compact: n });
        default:
            return (0, l.jsx)(ih, { compact: n });
    }
}
function ih(e) {
    let { compact: t } = e;
    return (0, l.jsx)(ip, {
        compact: t,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(ii.CircleErrorIcon, { size: "xs", color: eA.A.colors.TEXT_DEFAULT.css }),
                (0, l.jsx)(k.E, {
                    variant: "body-md/semibold",
                    color: "text-default",
                    children: M.intl.string(M.t.VdZCcC),
                }),
            ],
        }),
        content: (0, l.jsx)(k.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: M.intl.string(M.t["NxHYX/"]),
        }),
    });
}
function ig(e) {
    let { compact: t } = e;
    return (0, l.jsx)(ip, {
        compact: t,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(ii.CircleErrorIcon, { size: "xs", color: eA.A.colors.TEXT_DEFAULT.css }),
                (0, l.jsx)(k.E, {
                    variant: "body-md/semibold",
                    color: "text-default",
                    children: M.intl.string(M.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, l.jsx)(k.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: M.intl.string(M.t.Dc9wCp),
        }),
    });
}
function iA(e) {
    let { message: t, compact: n } = e,
        i = R.default.getUser((0, I.ZD)(t)),
        s = tX.A.getBasicChannel(t.channel_id)?.guild_id,
        r = null != s && null != i ? O.Ay.getMember(s, i.id) : null,
        { avatarSrc: o, avatarDecorationSrc: c, eventHandlers: d } = (0, id.A)({ userId: i?.id, guildId: s, size: 12 }),
        u = a.useRef(null);
    return (0, l.jsx)(ip, {
        compact: n,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(is.SettingsInfoIcon, { size: "xs", color: eA.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                (0, l.jsx)(k.E, {
                    variant: "body-md/semibold",
                    color: "text-feedback-positive",
                    children: M.intl.string(M.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, l.jsxs)("div", {
            className: iu.Ns,
            children: [
                (0, l.jsx)("div", {
                    className: iu.gk,
                    children:
                        null != r &&
                        null != i &&
                        (0, l.jsxs)(a.Fragment, {
                            children: [
                                (0, l.jsx)(k.E, {
                                    variant: "body-xs/medium",
                                    color: "text-default",
                                    children: M.intl.string(M.t.qlFrXW),
                                }),
                                (0, l.jsx)(tI.A, {
                                    targetElementRef: u,
                                    user: i,
                                    guildId: s,
                                    channelId: t.channel_id,
                                    messageId: t.id,
                                    children: (e) =>
                                        (0, l.jsxs)(il.D, {
                                            innerRef: u,
                                            className: iu.rI,
                                            ...e,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    ...d,
                                                    children: (0, l.jsx)(nz.eu, {
                                                        src: o,
                                                        avatarDecoration: c,
                                                        size: t2._3.SIZE_16,
                                                        "aria-label": "TODO",
                                                    }),
                                                }),
                                                (0, l.jsxs)(k.E, {
                                                    variant: "body-xs/medium",
                                                    style: {
                                                        color:
                                                            null != r.colorString
                                                                ? r.colorString
                                                                : eA.A.colors.TEXT_DEFAULT.css,
                                                    },
                                                    children: [" ", "@", i.username],
                                                }),
                                            ],
                                        }),
                                }),
                            ],
                        }),
                }),
                (0, l.jsx)(im, {}),
                (0, l.jsx)(k.E, {
                    variant: "body-xs/medium",
                    color: "text-default",
                    children: tt()(t.timestamp).fromNow(),
                }),
            ],
        }),
        content: (0, l.jsx)(k.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: M.intl.string(M.t["QV/8u5"]),
        }),
    });
}
function iE(e) {
    let { message: t, compact: n } = e,
        { joinAttempts: i, raidDatetime: s, dmsSent: r, raidType: o, resolvedReason: c } = (0, I.Bk)(t),
        u = (0, d.bG)([tX.A], () => tX.A.getChannel(t.channel_id), [t.channel_id]),
        m = u?.guild_id ?? null,
        { shouldShowIncidentActions: x } = (0, ir.Li)(m),
        h = (0, nB.Am)(t.author.id, t.channel_id),
        g = a.useCallback(() => {
            let e = u?.guild_id;
            null != e && (0, nv.is)(t.id, e);
        }, [t.id, u]),
        f = o === it.DM_RAID,
        A = f ? ii.CircleErrorIcon : ia.ChatWarningIcon;
    return (0, l.jsx)(ip, {
        compact: n,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(A, { size: "xs", color: eA.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, l.jsx)(k.E, {
                    variant: "body-md/semibold",
                    color: "text-feedback-critical",
                    children: f ? M.intl.string(M.t["8+lHUb"]) : M.intl.string(M.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, l.jsxs)("div", {
            className: iu.Ns,
            children: [
                null != i &&
                    (0, l.jsx)(k.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: M.intl.format(M.t["4ylIiu"], { joinCount: i }),
                    }),
                null != r &&
                    (0, l.jsx)(k.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: M.intl.format(M.t["5C8Mh3"], { dmsSent: r }),
                    }),
                null != s &&
                    (0, l.jsxs)(a.Fragment, {
                        children: [
                            (0, l.jsx)(im, {}),
                            (0, l.jsx)(k.E, {
                                variant: "body-xs/medium",
                                color: "text-default",
                                children: tt()(s).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != s
                ? (0, l.jsx)(k.E, {
                      variant: "body-md/normal",
                      color: "text-muted",
                      children: M.intl.format(M.t["4QIIZl"], {
                          dateTime: s.toLocaleString(M.intl.currentLocale, io.yc),
                      }),
                  })
                : null,
        footerButtons: x
            ? (0, l.jsxs)("div", {
                  className: iu.OZ,
                  children: [
                      (0, l.jsxs)("div", {
                          className: iu.AX,
                          children: [
                              (0, l.jsx)(nI.ShieldIcon, {
                                  size: "xs",
                                  color: eA.A.unsafe_rawColors.BRAND_500.css,
                                  className: iu.Dq,
                              }),
                              (0, l.jsx)(nN.Q, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "body-xs/medium",
                                  text: M.intl.string(M.t.DEoVWZ),
                                  onClick: function (e) {
                                      h(e);
                                  },
                              }),
                          ],
                      }),
                      (0, l.jsx)(im, {}),
                      (0, l.jsx)("div", {
                          className: iu.AX,
                          children: (0, l.jsx)(nN.Q, {
                              variant: "primary",
                              textVariant: "body-xs/medium",
                              size: "sm",
                              text: (0, I.Oj)(c),
                              onClick: g,
                          }),
                      }),
                  ],
              })
            : null,
    });
}
function i_(e) {
    let { message: t, compact: n } = e,
        i = tX.A.getBasicChannel(t.channel_id)?.guild_id,
        { raidDatetime: s, decisionId: r, suspiciousMentionActivityUntil: o } = (0, I.Bk)(t);
    return (0, l.jsx)(ip, {
        compact: n,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(ii.CircleErrorIcon, { size: "xs", color: eA.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, l.jsx)(k.E, {
                    variant: "body-md/semibold",
                    color: "text-feedback-critical",
                    children: M.intl.string(M.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, l.jsx)("div", {
            className: iu.Ns,
            children:
                null != s &&
                (0, l.jsx)(k.E, { variant: "body-xs/medium", color: "text-default", children: tt()(s).fromNow() }),
        }),
        content: (0, l.jsx)(k.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: M.intl.string(M.t.SWIWEV),
        }),
        footerButtons: (0, l.jsxs)("div", {
            className: iu.OZ,
            children: [
                (0, l.jsx)("div", {
                    className: iu.AX,
                    children: (0, l.jsx)(nN.Q, {
                        variant: "primary",
                        textVariant: "body-xs/medium",
                        size: "sm",
                        text: M.intl.string(M.t.oX14El),
                        onClick: function () {
                            null != i &&
                                null != r &&
                                (0, nS.W5)(i, r, () => {
                                    ((0, ic.w)(o), (0, nS.wu)(i));
                                });
                        },
                    }),
                }),
                (0, l.jsx)(im, {}),
                (0, l.jsx)("div", {
                    className: iu.AX,
                    children: (0, l.jsx)(nN.Q, {
                        variant: "primary",
                        textVariant: "body-xs/medium",
                        size: "sm",
                        text: M.intl.string(M.t["1R7QIx"]),
                        onClick: function () {
                            null != i && eh.A.open(i, H.BEX.GUILD_AUTOMOD, void 0, H.nd0.AUTOMOD_MENTION_SPAM);
                        },
                    }),
                }),
            ],
        }),
    });
}
function ip(e) {
    let { compact: t, header: n, subheader: i, content: s, footerButtons: a } = e;
    return (0, l.jsxs)("div", {
        className: ek()(iu.gD, { [iu.oE]: t }),
        children: [
            (0, l.jsxs)("div", {
                className: iu.Ux,
                children: [
                    (0, l.jsxs)("div", {
                        className: iu.LN,
                        children: [
                            (0, l.jsx)("div", { className: iu.MY, children: n }),
                            null != i && (0, l.jsx)("div", { className: iu.m_, children: i }),
                        ],
                    }),
                    s,
                ],
            }),
            null != a && (0, l.jsx)("div", { className: ek()(iu.Y4, iu.UX, { [iu.oE]: t }), children: a }),
        ],
    });
}
function iC(e) {
    let { id: t, compact: n, message: i, channel: s } = e,
        {
            avatarSrc: a,
            eventHandlers: { onMouseEnter: r, onMouseLeave: o },
        } = nY(!0),
        { notificationType: c } = (0, I.Bk)(i),
        d = null == c || c === ie.W.RAID;
    return (0, l.jsx)("div", {
        onMouseEnter: r,
        onMouseLeave: o,
        children: (0, l.jsx)(T.A, {
            className: ek()(iu.rs, { [iu.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nQ, { src: a }),
            iconContainerClassName: iu.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: ek()(iu.Qs, { [iu.oE]: n }),
                children: [
                    (0, l.jsx)(nH.ix, {
                        message: i,
                        messageClassname: iu.he,
                        className: ek()(iu.QV, iu.he, { [iu.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: iu.he,
                            children: [
                                (0, l.jsx)(k.E, {
                                    variant: "body-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: iu.Xh,
                                    children: M.intl.string(M.t.hG1StD),
                                }),
                                (0, l.jsx)(nj.A, { type: n$.nu.SYSTEM_DM, className: iu.Al }),
                                d &&
                                    (0, l.jsx)(k.E, {
                                        variant: "body-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: iu.he,
                                        children: M.intl.string(M.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", { className: iu.BZ }),
                    (0, l.jsx)(ix, { message: i, compact: n }),
                ],
            }),
        }),
    });
}
function iI(e) {
    let { message: t, ...n } = e;
    return (0, I.de)(t) ? (0, l.jsx)(iC, { message: t, ...n }) : (0, l.jsx)(n4, { message: t, ...n });
}
var iN = n(480012);
function ij(e) {
    let { message: t, compact: i, missed: s, joinable: a, usernameHook: r, onClickJoinCall: o } = e,
        c = (0, U.Ay)(t),
        d = c.nick,
        u = r(c),
        m = (0, iN.A)(t);
    return s
        ? (0, l.jsx)(T.A, {
              icon: n(130158),
              timestamp: t.timestamp,
              compact: i,
              children:
                  null != m
                      ? M.intl.format(M.t.AcqBmO, { username: d, usernameHook: u, callDuration: m })
                      : M.intl.format(M.t["43phHx"], { username: d, usernameHook: u }),
          })
        : (0, l.jsxs)(T.A, {
              icon: n(175476),
              timestamp: t.timestamp,
              compact: i,
              children: [
                  null != m
                      ? M.intl.format(M.t["7TeC1P"], { username: d, usernameHook: u, callDuration: m })
                      : M.intl.format(M.t.LuB5RD, { username: d, usernameHook: u }),
                  a ? (0, l.jsx)(T.A.Action, { onClick: o, children: M.intl.string(M.t.oa9mvZ) }) : null,
              ],
          });
}
var iT = n(517905);
function iv(e) {
    let { children: t, messageReference: n, guildName: i } = e,
        s = a.useRef(null);
    if (null == n) return (0, l.jsx)(tC.Anchor, { children: t });
    let { guild_id: r } = n;
    return null == r
        ? (0, l.jsx)(tC.Anchor, { children: t })
        : (0, l.jsx)(iT.A, {
              guildId: r,
              name: i,
              targetElementRef: s,
              children: (e) => {
                  let { "aria-controls": n, "aria-expanded": i, ...a } = e;
                  return (0, l.jsx)(tC.Anchor, { ...a, ref: s, children: t });
              },
          });
}
function iS(e) {
    let { usernameHook: t, message: i, compact: s } = e,
        { content: a, timestamp: r, messageReference: o } = i,
        c = (0, U.Ay)(i),
        d = t(c),
        u = (a ?? "").split(" ").slice(0, -1).join(" "),
        m = M.intl.format(M.t["47CZc2"], {
            username: c.nick,
            usernameHook: d,
            webhookName: a,
            webhookNameHook: (e, t) => (0, l.jsx)(iv, { messageReference: o, guildName: u, children: e }, t),
        });
    return (0, l.jsx)(T.A, { icon: n(617184), timestamp: r, compact: s, children: m });
}
var iO = n(22231),
    iR = n(73028);
function iy(e) {
    let { message: t, usernameHook: n, compact: i } = e,
        s = (0, U.Ay)(t),
        a = n(s);
    return (0, l.jsx)(T.A, {
        iconNode: (0, l.jsx)(iO.PencilIcon, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: i,
        children: M.intl.format(M.t["4wLp25"], {
            username: s.nick,
            usernameHook: a,
            editGroupButton: (0, l.jsx)(
                k.E,
                { tag: "span", variant: "body-md/medium", color: "text-link", children: M.intl.string(M.t["5Q9+/L"]) },
                `edit-group-button-${t.id}`,
            ),
            onEditGroup: () => (0, iR.U)(t.channel_id, _.A.GROUP_DM_SYSTEM_MESSAGE_ICON),
        }),
    });
}
var iM = n(663417),
    ib = n(429913),
    iL = n(564178);
function ik(e) {
    let { message: t, channel: n, compact: i } = e,
        s = (0, U.Ay)(t),
        a = (0, j.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id })(s),
        r = (0, ib.h)(t.applicationId);
    if (null == r) return null;
    let o = M.intl.format(M.t.mAtJTC, {
        username: t.author.username,
        usernameHook: a,
        applicationName: r.name,
        applicationNameHook: () =>
            (0, l.jsx)(
                k.E,
                { className: iL.S, variant: "body-md/semibold", color: "text-strong", children: r.name },
                r.name,
            ),
        helpdeskArticle: "#",
    });
    return (0, l.jsx)(T.A, {
        iconNode: (0, l.jsx)(iM.RefreshIcon, { size: "sm", color: eA.A.colors.STATUS_POSITIVE }),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: iL.H,
        children: o,
    });
}
function iD(e) {
    let { message: t, usernameHook: n, compact: i, isForumPost: s } = e,
        a = (0, U.Ay)(t),
        r = n(a),
        o = (0, d.bG)([tX.A], () => tX.A.getChannel(t.channel_id)?.isGroupDM() ?? !1);
    return (0, l.jsx)(T.A, {
        compact: i,
        iconNode: (0, l.jsx)(iO.PencilIcon, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        children: o
            ? M.intl.format("" === t.content ? M.t.AI1ZZr : M.t.geP3rU, {
                  username: a.nick,
                  usernameHook: r,
                  channelName: (0, l.jsx)(
                      k.E,
                      { tag: "span", variant: "body-md/medium", color: "text-strong", children: t.content },
                      `group-name-${t.id}`,
                  ),
                  editGroupButton: (0, l.jsx)(
                      k.E,
                      {
                          tag: "span",
                          variant: "body-md/medium",
                          color: "text-link",
                          children: M.intl.string(M.t["5Q9+/L"]),
                      },
                      `edit-group-button-${t.id}`,
                  ),
                  onEditGroup: () => (0, iR.U)(t.channel_id, _.A.GROUP_DM_SYSTEM_MESSAGE_NAME),
              })
            : M.intl.format(s ? M.t.SOQ4hJ : M.t.oItgEw, { username: a.nick, usernameHook: r, channelName: t.content }),
    });
}
var iU = n(366605);
function iP(e) {
    let { message: t, usernameHook: n, onClickPins: i, compact: s } = e,
        a = (0, U.Ay)(t),
        r = a.nick,
        o = n(a);
    function c() {
        if (null == t.messageReference) return;
        let { channel_id: e, message_id: n } = t.messageReference;
        g.A.jumpToMessage({ channelId: e, messageId: n, flash: !0 });
    }
    let d = { iconNode: (0, l.jsx)(iU.PinIcon, { size: "sm", color: "currentColor" }) };
    return (0, l.jsx)(T.A, {
        ...d,
        timestamp: t.timestamp,
        compact: s,
        children:
            null != t.messageReference
                ? null == i
                    ? M.intl.format(M.t.lD5tup, { usernameHook: o, username: r, messageOnClick: c })
                    : M.intl.format(M.t.yIDvPL, {
                          usernameHook: o,
                          username: r,
                          pinsActionOnClick: i,
                          messageOnClick: c,
                      })
                : null == i
                  ? M.intl.format(M.t.vfkjqx, { usernameHook: o, username: r })
                  : M.intl.format(M.t.R7vZGZ, { usernameHook: o, username: r, pinsActionOnClick: i }),
    });
}
var iG = n(497767);
function iH(e) {
    let t,
        { message: n, channel: i, compact: s } = e,
        a = n.getChannelId(),
        r = i.isDM() ? i.getRecipientId() : void 0,
        o = (0, d.bG)([R.default], () => (null != r ? R.default.getUser(r) : void 0), [r]),
        c = (0, d.bG)([R.default], () => R.default.getCurrentUser(), []),
        u = null != c && n.author.id === c.id,
        m = (0, U.d8)(o, i),
        x = (0, j.P)({ user: o, channelId: a, guildId: void 0, messageId: n.id })(m);
    if (!i.isDM() || null == o || null == c) return null;
    let h = { username: m.nick, usernameHook: x },
        g = n.content;
    if (null != g && "" !== g) {
        let e = (0, l.jsx)(
            k.E,
            { tag: "span", variant: "body-md/medium", color: "text-strong", children: g },
            `note-${n.id}`,
        );
        t = u ? M.intl.format(M.t.IquUXd, { ...h, note: e }) : M.intl.format(M.t.ZOZy2q, { ...h, note: e });
    } else t = u ? M.intl.format(M.t.S6PRsh, h) : M.intl.format(M.t["H/9Tlj"], h);
    return (0, l.jsx)(T.A, {
        iconNode: (0, l.jsx)(iG.UserCheckIcon, { size: "sm", color: eA.A.colors.STATUS_POSITIVE }),
        timestamp: n.timestamp,
        compact: s,
        children: t,
    });
}
function iw(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, U.Ay)(t),
        a = i(s),
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c },
        } = nY(!0),
        d =
            "" !== t.content
                ? new Date(t.content).toLocaleString(M.intl.currentLocale, {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                  })
                : "";
    return (0, l.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, l.jsx)(T.A, {
            className: ek()(iu.rs, { [iu.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nQ, { src: r }),
            iconContainerClassName: iu.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: ek()(iu.Qs, { [iu.oE]: n }),
                children: [
                    (0, l.jsx)(nH.ix, {
                        message: t,
                        messageClassname: iu.he,
                        className: ek()(iu.QV, iu.he, { [iu.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: iu.he,
                            children: [
                                (0, l.jsx)(k.E, {
                                    variant: "body-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: iu.Xh,
                                    children: M.intl.string(M.t.hG1StD),
                                }),
                                (0, l.jsx)(nj.A, { type: n$.nu.SYSTEM_DM, className: iu.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: ek()(iu.__invalid_messageContent, { [iu.oE]: n }),
                        children:
                            t.type === H.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? M.intl.format(M.t["+m8eD7"], { username: s.nick, usernameHook: a, time: d })
                                : M.intl.format(M.t["BHeke+"], { username: s.nick, usernameHook: a }),
                    }),
                ],
            }),
        }),
    });
}
var iF = n(565255);
let iV = "this server";
function iB(e) {
    let { message: t, compact: i, guildName: s, onClick: a, onClickGuild: r } = e;
    return (0, l.jsx)(T.A, {
        icon: n(290388),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: iF.B,
        children: M.intl.format(M.t.bYdG3f, { guildName: s ?? iV, onClick: a, onClickGuild: r ?? (() => {}) }),
    });
}
function iJ(e) {
    let { message: t, compact: n, guildName: i, onClickGuild: s } = e;
    return (0, l.jsx)(T.A, {
        iconNode: (0, l.jsx)(ii.CircleErrorIcon, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: iF.Q,
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: iF.B,
        children: M.intl.format(M.t.vzfXql, { guildName: i ?? iV, onClickGuild: s ?? (() => {}) }),
    });
}
function iz(e) {
    let { message: t, compact: n, guildName: i, onClickGuild: s } = e;
    return (0, l.jsx)(T.A, {
        iconNode: (0, l.jsx)(ii.CircleErrorIcon, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: iF.Q,
        }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: iF.B,
        children: M.intl.format(M.t["/TfvyR"], { guildName: i ?? iV, onClickGuild: s ?? (() => {}) }),
    });
}
function iZ(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, U.Ay)(t),
        a = i(s),
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c },
        } = nY(!0);
    return (0, l.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, l.jsx)(T.A, {
            className: ek()(iu.rs, { [iu.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nQ, { src: r }),
            iconContainerClassName: iu.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: ek()(iu.Qs, { [iu.oE]: n }),
                children: [
                    (0, l.jsx)(nH.ix, {
                        message: t,
                        messageClassname: iu.he,
                        className: ek()(iu.QV, iu.he, { [iu.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: iu.he,
                            children: [
                                (0, l.jsx)(k.E, {
                                    variant: "body-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: iu.Xh,
                                    children: M.intl.string(M.t.hG1StD),
                                }),
                                (0, l.jsx)(nj.A, { type: n$.nu.SYSTEM_DM, className: iu.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: ek()(iu.__invalid_messageContent, { [iu.oE]: n }),
                        children: M.intl.format(M.t.qntXNQ, { username: s.nick, usernameHook: a }),
                    }),
                ],
            }),
        }),
    });
}
function iK(e) {
    let { message: t, compact: n, usernameHook: i, channel: s } = e,
        a = (0, d.bG)([ei.A], () => ei.A.getGuild(s.guild_id)),
        r = (0, U.Ay)(t),
        o = i(r),
        {
            avatarSrc: c,
            eventHandlers: { onMouseEnter: u, onMouseLeave: m },
        } = nY(!0);
    return (0, l.jsx)("div", {
        onMouseEnter: u,
        onMouseLeave: m,
        children: (0, l.jsx)(T.A, {
            className: ek()(iu.rs, { [iu.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nQ, { src: c }),
            iconContainerClassName: iu.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: ek()(iu.Qs, { [iu.oE]: n }),
                children: [
                    (0, l.jsx)(nH.ix, {
                        message: t,
                        messageClassname: iu.he,
                        className: ek()(iu.QV, iu.he, { [iu.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: iu.he,
                            children: [
                                (0, l.jsx)(k.E, {
                                    variant: "body-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: iu.Xh,
                                    children: M.intl.string(M.t.hG1StD),
                                }),
                                (0, l.jsx)(nj.A, { type: n$.nu.SYSTEM_DM, className: iu.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: ek()(iu.__invalid_messageContent, { [iu.oE]: n }),
                        children: M.intl.format(M.t.W0UBI3, {
                            username: r.nick,
                            usernameHook: o,
                            guildName: a?.name ?? "",
                        }),
                    }),
                ],
            }),
        }),
    });
}
var iW = n(959988),
    iX = n(402216);
function iY(e) {
    let { message: t, channel: n, playingActivity: i, onJoinStream: s, usernameHook: a, compact: r } = e,
        o = (0, U.Ay)(t),
        c = (0, nb.Ay)(n),
        d = t.call?.duration,
        u = a(o),
        m = M.intl.format(M.t.FKXvaI, {
            username: o.nick,
            activityName: null != i ? i.name : "unknown",
            onJoinStream: s,
            usernameHook: u,
        });
    return (
        null != d &&
            (m = M.intl.format(M.t.NEFxtd, {
                username: o.nick,
                duration: d.humanize(),
                channelName: c ?? "",
                usernameHook: u,
            })),
        (0, l.jsx)(T.A, {
            iconNode:
                null != d
                    ? (0, l.jsx)(iW.ScreenXIcon, { size: "custom", color: "currentColor", width: 20, height: 20 })
                    : (0, l.jsx)(iX.Ay, { size: iX.Ay.Sizes.SMALL }),
            timestamp: t.timestamp,
            compact: r,
            children: m,
        })
    );
}
var iQ = n(687966),
    iq = n(769015),
    i$ = n(234003);
function i0(e) {
    let { message: t, channel: n, author: i, compact: s } = e,
        { nick: a } = (0, U.d8)(i, n),
        r = (0, j.P)({ user: i, channelId: n.id, guildId: void 0, messageId: void 0 })(),
        o = (0, ib.h)(t.applicationId);
    if (null == o) return null;
    let c = M.intl.format(M.t.m7Lwas, {
        username: a,
        usernameHook: r,
        gameName: o.name,
        gameIconHook: (e) =>
            (0, l.jsxs)("span", {
                className: i$.Y_,
                children: [(0, l.jsx)(iq.A, { game: o, size: iq.M.XXSMALL, className: i$.p4 }), " ", e],
            }),
        helpdeskArticle: tr.A.getArticleURL(H.MVz.SOCIAL_LAYER_CONNECTIONS),
    });
    return (0, l.jsx)(T.A, {
        iconNode: (0, l.jsx)(iQ.GameControllerIcon, { size: "sm" }),
        compact: s,
        contentClassName: i$.Qs,
        children: (0, l.jsx)("div", { children: c }),
    });
}
function i1(e) {
    let { message: t, otherUsername: i, usernameHook: s, otherUsernameHook: a, compact: r } = e,
        { nick: o } = (0, U.Ay)(t),
        c = s(),
        d = a(),
        u = M.intl.format(M.t.MMN2Jq, { username: o, usernameHook: c, otherUsername: i, otherUsernameHook: d });
    return (0, l.jsx)(T.A, { icon: n(617184), timestamp: t.timestamp, compact: r, children: u });
}
function i2(e) {
    let t,
        { message: i, usernameHook: s, otherUser: a, otherUsernameHook: r, compact: o, channel: c } = e,
        d = (0, U.Ay)(i),
        u = d.nick,
        m = s(d),
        x = (0, U.d8)(a, c);
    if (null != x && null != r) {
        let e = r(x);
        t = M.intl.format(M.t.L2FyVq, { username: u, usernameHook: m, otherUsername: x.nick, otherUsernameHook: e });
    } else t = M.intl.format(M.t["5v2xa8"], { username: u, usernameHook: m });
    return (0, l.jsx)(T.A, { icon: n(884797), timestamp: i.timestamp, compact: o, children: t });
}
var i3 = n(451394),
    i7 = n(598490);
function i6(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, U.Ay)(t),
        a = i(s),
        r = M.intl.format(M.t["zla/ux"], { username: s.nick, usernameHook: a, topic: t.content });
    return (0, l.jsx)(T.A, {
        className: i7.d,
        iconNode: (0, l.jsx)(i3.StageIcon, { size: "md", color: "currentColor" }),
        iconContainerClassName: i7.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
var i5 = n(297152);
function i9(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, U.Ay)(t),
        a = i(s),
        r = M.intl.format(M.t.tv2DNy, { username: s.nick, usernameHook: a });
    return (0, l.jsx)(T.A, {
        className: i7.d,
        iconNode: (0, l.jsx)(i5.HandRequestSpeakIcon, { size: "md", color: "currentColor" }),
        iconContainerClassName: i7.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function i8(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, U.Ay)(t),
        a = i(s),
        r = M.intl.format(M.t["dKW5C+"], { username: s.nick, usernameHook: a });
    return (0, l.jsx)(T.A, {
        className: i7.d,
        iconNode: (0, l.jsx)(x.MicrophoneArrowRightIcon, { size: "md", color: "currentColor" }),
        iconContainerClassName: i7.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function i4(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, U.Ay)(t),
        a = i(s),
        r = M.intl.format(M.t["Rv+TSM"], { username: s.nick, usernameHook: a, topic: t.content });
    return (0, l.jsx)(T.A, {
        className: i7.d,
        iconNode: (0, l.jsx)(i3.StageIcon, { size: "md", color: eA.A.unsafe_rawColors.GREEN_360.css }),
        iconContainerClassName: i7.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function se(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, U.Ay)(t),
        a = i(s),
        r = M.intl.format(M.t.Yy6vLs, { username: s.nick, usernameHook: a, topic: t.content });
    return (0, l.jsx)(T.A, {
        className: i7.d,
        iconNode: (0, l.jsx)(i3.StageIcon, { size: "md", color: "currentColor" }),
        iconContainerClassName: i7.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
var st = n(163328),
    sn = n(562534);
function si(e) {
    let {
            message: t,
            compact: n,
            usernameHook: i,
            onClickThread: s,
            onClickViewThreads: a,
            onContextMenuThread: r,
        } = e,
        o = (0, U.Ay)(t),
        c = i(o),
        u = (0, d.bG)([tX.A], () => tX.A.getChannel(t.messageReference?.channel_id)),
        m = (0, nb.Ay)(u),
        x = M.intl.format(M.t.cZ9Uf2, {
            actorName: o.nick,
            actorHook: c,
            threadName: m ?? t.content,
            threadOnClick: { onClick: s, onContextMenu: r },
            viewThreadsOnClick: a,
        });
    return (0, l.jsx)(T.A, {
        iconNode: (0, l.jsx)(st.ThreadIcon, { size: "md", color: "currentColor", className: sn.K }),
        timestamp: t.timestamp,
        compact: n,
        children: x,
    });
}
function ss(e) {
    let { message: t, channel: i, targetUser: s, actorUsernameHook: a, targetUsernameHook: r, compact: o } = e,
        c = (0, U.Ay)(t),
        d = (0, U.d8)(s, i),
        u = a(c),
        m = r(d ?? void 0),
        x = M.intl.format(M.t.tusv2h, { actorName: c.nick, actorHook: u, targetName: d?.nick, targetHook: m });
    return (0, l.jsx)(T.A, { icon: n(617184), timestamp: t.timestamp, compact: o, children: x });
}
function sl(e) {
    let { message: t, channel: i, targetUser: s, actorUsernameHook: a, targetUsernameHook: r, compact: o } = e,
        c = (0, U.Ay)(t),
        d = (0, U.d8)(s, i),
        u = a(c),
        m = r(d ?? void 0),
        x = M.intl.format(M.t["32QI5/"], { actorName: c.nick, actorHook: u, targetName: d?.nick, targetHook: m });
    return (0, l.jsx)(T.A, { icon: n(884797), timestamp: t.timestamp, compact: o, children: x });
}
var sa = n(961934),
    sr = n(779014);
function so(e) {
    let { message: t, usernameHook: i, compact: s } = e,
        a = (0, U.Ay)(t),
        r = i(a),
        o = sr.A.getSystemMessageUserJoin(t.id),
        c = M.intl.format(o, { username: a.nick, usernameHook: r });
    return (0, l.jsx)(T.A, { icon: n(617184), timestamp: t.timestamp, compact: s, children: c });
}
var sc = n(776310),
    sd = n(115560),
    su = n(319060),
    sm = n(544048),
    sx = n(844222),
    sh = n(104510),
    sg = n(21161);
let sf = (0, n(945810).mj)({
    name: "2026-03-new-server-boost-system-messages",
    kind: "user",
    defaultConfig: { enabled: !1, showCta: !0 },
    variations: { 1: { enabled: !0, showCta: !0 }, 2: { enabled: !0, showCta: !1 } },
});
var sA = n(513609),
    sE = n(591563);
function s_(e) {
    let t = Number(e.content);
    return isNaN(t) || 0 === t ? 1 : t;
}
var sp = n(780964),
    sC = n(766075),
    sI = n(473145),
    sN = n(473193),
    sj = n(987144);
function sT(e) {
    let { guild: t, analyticsLocation: n, analyticsLocations: i, closeLayer: s, variant: r = "expressive" } = e,
        [o, c] = a.useState(!1),
        { analyticsLocations: u } = (0, B.Ay)(i ?? []),
        x = (0, d.bG)([R.default], () => R.default.getCurrentUser()),
        h = x?.isPremiumGroupMember();
    return (0, l.jsx)(m.$, {
        variant: r,
        size: "md",
        icon: sh.BoostGemIcon,
        text: M.intl.string(M.t.gKmQ1G),
        onClick: async function () {
            (c(!0),
                await (0, sj.g)({
                    analyticsLocations: u,
                    analyticsLocation: { object: H.ZSU.BUTTON_CTA, objectType: H.btD.BUY, ...n },
                    guild: t,
                    closeLayer: s,
                    onClose: () => {
                        c(!1);
                    },
                }));
        },
        loading: o,
        disabled: h,
    });
}
var sv = n(363487),
    sS = n(828162),
    sO = n(889158);
function sR(e) {
    let t = (0, sv.A)(e);
    return a.useCallback(() => {
        null != e &&
            (t
                ? (0, sS.A)(e, _.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                : (0, N.K4)({
                      guildId: e,
                      location: { section: H.JJy.CHANNEL_TEXT_AREA, object: H.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                  }));
    }, [e, t]);
}
function sy(e) {
    let { className: t, animate: n } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)("img", {
            className: sO.fj,
            src: n
                ? "https://cdn.discordapp.com/assets/content/d13cdfe882b0acba4f7752d488ba86dc628364d43eb3be876c8bb6f0bc80a240.png"
                : "https://cdn.discordapp.com/assets/content/424bcefb880eff14d647b0467cf446e83c27321af508a2e0a5f707d80c42e58b.png",
            alt: "",
            "aria-hidden": !0,
        }),
    });
}
function sM(e) {
    let { title: t, body: n } = e;
    return (0, l.jsxs)("div", {
        className: sO.Qs,
        children: [
            (0, l.jsx)(k.E, { variant: "body-md/semibold", scaleFontToUserSetting: !0, className: sO.DD, children: t }),
            (0, l.jsx)(k.E, { variant: "body-sm/medium", scaleFontToUserSetting: !0, className: sO.rf, children: n }),
        ],
    });
}
function sb(e) {
    let { guild: t, firstBooster: n } = e;
    return (0, l.jsx)("div", {
        className: sO.o1,
        children: (0, l.jsx)(sT, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: H.liQ.GUILD_CHANNEL,
                section: H.JJy.CHANNEL_TEXT_AREA,
                object: H.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
            },
            analyticsLocations: [
                n
                    ? _.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE_FIRST_TIME_BOOSTER
                    : _.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE,
            ],
        }),
    });
}
function sL(e) {
    let { guild: t, children: n } = e,
        i = sR(t?.id);
    return (0, l.jsx)(il.D, { tag: "a", role: "link", className: sO.oT, onClick: i, children: n });
}
function sk(e) {
    let t,
        n,
        { message: i, guild: s, usernameHook: a, showCta: o } = e,
        c = ((t = (0, d.bG)([D.Ay], () => D.Ay.useReducedMotion)), (n = r.useContext(sN.C)?.animate ?? !1), !t && n),
        u = (0, U.Ay)(i),
        m = a(u),
        x = i.hasFlag(H.pr7.IS_FIRST_BOOSTER),
        h = sR(s?.id),
        g = x
            ? M.intl.format(M.t["/1IQGD"], { username: u.nick, usernameHook: m })
            : M.intl.format(M.t.SbSWvY, { username: u.nick, usernameHook: m, numSubscriptions: s_(i) }),
        f = o
            ? M.intl.format(M.t.dWm8Iu, { learnMoreHook: (e) => (0, l.jsx)(sL, { guild: s, children: e }) })
            : M.intl.string(M.t["0Mdw0t"]),
        A = (0, l.jsxs)("div", {
            className: sO.kL,
            children: [
                (0, l.jsx)(sy, { className: sO.rc, animate: c }),
                (0, l.jsx)(sM, { title: g, body: f }),
                o && null != s && (0, l.jsx)(sb, { guild: s, firstBooster: x }),
            ],
        }),
        E = (0, l.jsx)(sh.BoostGemIcon, { className: sO.Kk });
    return (0, l.jsx)(T.A, {
        contentClassName: sO.$O,
        iconNode: E,
        iconContainerClassName: sO.zc,
        children: o ? A : (0, l.jsx)(il.D, { className: sO.w8, onClick: h, children: A }),
    });
}
var sD = n(50826);
let sU = {
    enter: { BEG: 0, END: 22 },
    confetti: { BEG: 23, END: 119 },
    leaf_peel: { BEG: 120, END: 160 },
    leaf_fall: { BEG: 161, END: 163 },
    exit: { BEG: 164, END: 200 },
};
var sP =
    (((s = {}).TOP_LEFT = "TOP_LEFT"),
    (s.TOP_RIGHT = "TOP_RIGHT"),
    (s.BOTTOM_LEFT = "BOTTOM_LEFT"),
    (s.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
    s);
let sG = ["TOP_LEFT", "TOP_RIGHT"],
    sH = (0, eD.xI)(su.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    sw = { leafPosition: { x: 85, y: 125 }, leafRotationDirection: 1 },
    sF = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({ x: e - 11, y: e - 125 }),
            confettiVelocityDirection: { x: 1, y: 1 },
            leafPosition: { x: 100, y: 144 },
            leafRotationDirection: 1,
        },
        TOP_RIGHT: {
            getConfettiPosition: (e) => ({ x: 11, y: e - 125 }),
            confettiVelocityDirection: { x: -1, y: 1 },
            leafPosition: { x: 90, y: 144 },
            leafRotationDirection: -1,
        },
        BOTTOM_LEFT: {
            ...sw,
            getConfettiPosition: (e) => ({ x: e - 11, y: 125 }),
            confettiVelocityDirection: { x: 1, y: -1 },
        },
        BOTTOM_RIGHT: {
            ...sw,
            getConfettiPosition: (e) => ({ x: 11, y: 125 }),
            confettiVelocityDirection: { x: -1, y: -1 },
        },
    }),
    sV = "falling-leaf",
    sB = ["#61D5B2"],
    sJ = n(80705),
    sz = n(232460),
    sZ = [sJ, sz];
function sK() {
    return n
        .e(698150)
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function sW(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: s } = e,
        r = a.useRef(null),
        [o, c] = a.useState(null),
        [d] = a.useState(
            i ??
                (function () {
                    switch (Math.floor(Math.random() * Object.keys(sP).length)) {
                        case 0:
                            return "TOP_LEFT";
                        case 2:
                            return "TOP_RIGHT";
                        case 3:
                            return "BOTTOM_LEFT";
                        default:
                            return "BOTTOM_RIGHT";
                    }
                })(),
        ),
        { createMultipleConfettiAt: u, confettiCanvas: m } = a.useContext(sg.x),
        [x, h] = a.useState(null),
        g = (0, sc.f9)(m, x),
        f = (function (e, t) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    if (sG.includes(t)) return "leaf_peel";
                    return "exit";
                case "leaf_peel":
                    return "leaf_fall";
                case "leaf_fall":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(o, d),
        A = sG.includes(d),
        E = A && "exit" === o,
        _ = a.useCallback((e) => {
            c(e);
        }, []),
        p = a.useCallback(() => {
            "exit" === o && t?.();
        }, [t, o]),
        C = a.useCallback((e) => {
            r.current = e;
        }, []);
    return (
        a.useEffect(() => {
            if ("confetti" === o) {
                let { confettiVelocityDirection: e } = sF[d],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sH,
                            i = e?.getBoundingClientRect();
                        if (null == i) return { x: 0, y: 0 };
                        let s = sF[t].getConfettiPosition(n);
                        return { x: i.left + s.x, y: i.top + s.y };
                    })(r.current, d, s);
                u(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: { x: 10 * e.x, y: 80 * e.y },
                        maxValue: { x: 80 * e.x, y: 180 * e.y },
                    },
                });
            }
        }, [u, d, o, s]),
        a.useEffect(() => {
            if (A && "leaf_fall" === o) {
                let e = sF[d].leafRotationDirection;
                g.createConfetti(
                    {
                        id: `${sV}-${(0, sd.A)()}`,
                        position: {
                            type: "static",
                            value: (function (e, t) {
                                let n = e?.getBoundingClientRect();
                                if (null == n) return { x: 0, y: 0 };
                                let i = sF[t];
                                return { x: n.left + i.leafPosition.x, y: n.top + i.leafPosition.y };
                            })(r.current, d),
                        },
                        size: { type: "static", value: 45 },
                        rotation: {
                            type: "linear-random",
                            minValue: { x: 0, y: 0, z: 0 },
                            maxValue: { x: 0, y: 0, z: 0 },
                            minAddValue: { x: 0, y: 0, z: 8 * e },
                            maxAddValue: { x: 0, y: 0, z: 12 * e },
                        },
                    },
                    { sprite: "TOP_LEFT" === d ? sJ : sz },
                );
            }
        }, [A, g, d, o]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(sc.K_, { ref: h, sprites: sZ, colors: sB, spriteWidth: 45, spriteHeight: 45 }),
                (0, l.jsx)(il.D, {
                    onClick: n,
                    className: ek()(sD.FT, {
                        [sD.FZ]: "TOP_LEFT" === d,
                        [sD.S]: "TOP_RIGHT" === d,
                        [sD.Re]: "BOTTOM_LEFT" === d,
                        [sD._t]: "BOTTOM_RIGHT" === d,
                    }),
                    children: (0, l.jsx)(sm.t, {
                        animationRef: C,
                        className: ek()(sD.oQ, { [sD.EG]: E }),
                        nextScene: f,
                        sceneSegments: sU,
                        onScenePlay: _,
                        onSceneComplete: p,
                        importData: sK,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function sX(e) {
    let t,
        { message: n, compact: i, guild: s, usernameHook: r, onClickMessage: o } = e,
        c = (function (e) {
            switch (e.type) {
                case H.lAJ.GUILD_BOOST_TIER_1:
                    return H.TVA.TIER_1;
                case H.lAJ.GUILD_BOOST_TIER_2:
                    return H.TVA.TIER_2;
                case H.lAJ.GUILD_BOOST_TIER_3:
                    return H.TVA.TIER_3;
            }
            return null;
        })(n),
        d = s_(n),
        { createMultipleConfettiAt: u, addClickListener: m } = a.useContext(sg.x),
        [x, h] = a.useState(!1),
        g = a.useRef(null),
        { reducedMotion: f } = a.useContext(sx.C),
        A = (0, U.Ay)(n),
        E = A.nick,
        _ = r(A);
    t =
        null == c || null == s
            ? d > 1
                ? M.intl.format(M.t.yfC9ds, { username: E, usernameHook: _, numSubscriptions: d })
                : M.intl.format(M.t["57St/7"], { username: E, usernameHook: _ })
            : d > 1
              ? M.intl.format(M.t.PO9uJD, {
                    username: E,
                    usernameHook: _,
                    numSubscriptions: d,
                    guildName: s.name,
                    newTierName: (0, sI.gb)(c),
                })
              : M.intl.format(M.t.cUfTTE, {
                    username: E,
                    usernameHook: _,
                    guildName: s.name,
                    newTierName: (0, sI.gb)(c),
                });
    let p = a.useCallback(() => {
            if (!f.enabled)
                if (x || 0 !== Math.floor(50 * Math.random())) {
                    let e = g.current?.getBoundingClientRect();
                    if (null == e) return;
                    u(e.left + e.width / 2, e.top + e.height / 2);
                } else h(!0);
        }, [u, f, x]),
        C = a.useCallback(() => {
            h(!1);
        }, []),
        I = a.useCallback(() => {
            ((0, sE.O9)({ settingsVisible: !0 }), (0, sC.openUserSettings)(sp.X.POGGERMODE_PANEL), h(!1));
        }, []),
        N = a.useCallback(
            (e, t) => {
                t?.id.startsWith(sV) && I();
            },
            [I],
        );
    a.useEffect(() => m(N));
    let j = a.useCallback(
            (e) => {
                e.target === e.currentTarget && o(e);
            },
            [o],
        ),
        v = (0, l.jsx)(il.D, {
            className: sD.P0,
            innerRef: g,
            onClick: o,
            children: (0, l.jsx)(sh.BoostGemIcon, {
                color: eA.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: sD.Kk,
                onMouseEnter: p,
            }),
        });
    return (0, l.jsxs)(T.A, {
        iconNode: v,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, l.jsx)("div", { onClick: j, className: sD.iU, children: t }),
            x
                ? (0, l.jsx)(sA.Ay, {
                      children: (0, l.jsx)("div", {
                          className: sD.LK,
                          children: (0, l.jsx)(sW, { onAnimationComplete: C, onClick: I }),
                      }),
                  })
                : null,
        ],
    });
}
function sY(e) {
    let { message: t, compact: n, guild: i, usernameHook: s } = e,
        { enabled: a, showCta: r } = sf.useConfig({ location: "UserPremiumGuildSubscription" });
    return t.type === H.lAJ.GUILD_BOOST && a && !n
        ? (0, l.jsx)(sk, { message: t, guild: i, usernameHook: s, showCta: r })
        : (0, l.jsx)(sX, { ...e });
}
var sQ = n(305866),
    sq = n(95362),
    s$ = n(265872),
    s0 = n(983851),
    s1 = n(75604),
    s2 = n(538451),
    s3 = n(944052),
    s7 = n(461154);
function s6(e) {
    let { users: t, guildId: n, channelId: i } = e;
    return (0, l.jsx)(sQ.l, {
        className: s7.XM,
        children: (0, l.jsx)(sq.Ip, {
            className: s7.XG,
            children: (0, l.jsx)("div", {
                children: t.map((e) =>
                    (0, l.jsx)(
                        s2.A,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: t$.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
function s5(e) {
    let { message: t, channel: n, compact: i } = e,
        s = (0, iN.A)(t),
        r = (0, s3.X7)(t),
        o = t.messageReference?.channel_id,
        c = (0, d.bG)([tX.A], () => tX.A.getChannel(o)),
        u = (function (e, t, n, i, s, r) {
            let o = (0, j.P)({ user: n, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                c = (0, j.P)({ user: i[0], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                d = (0, j.P)({ user: i[1], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                u = (0, U.Ay)(e),
                [m, x] = i,
                h = (0, U.d8)(m, t),
                g = (0, U.d8)(x, t),
                f = (function (e, t) {
                    let n = a.useRef(null),
                        [i, s] = a.useState(!1),
                        r = a.useCallback((n) => (0, l.jsx)(s6, { users: n, guildId: e, channelId: t }), [e, t]);
                    return a.useCallback(
                        (e) => (t, a) =>
                            (0, l.jsx)(
                                s$.Y,
                                {
                                    targetElementRef: n,
                                    renderPopout: () => r(e),
                                    shouldShow: i,
                                    position: "bottom",
                                    onRequestClose: () => s(!1),
                                    children: (e) =>
                                        (0, l.jsx)(il.D, {
                                            ...e,
                                            tag: "a",
                                            style: { display: "inline" },
                                            innerRef: n,
                                            onClick: () => {
                                                s((e) => !e);
                                            },
                                            children: t,
                                        }),
                                },
                                a,
                            ),
                        [i, r],
                    );
                })(t.guild_id, t.id),
                A = a.useCallback(
                    (e, t) =>
                        null == r
                            ? e
                            : (0, l.jsx)(
                                  s1.T,
                                  {
                                      channel: r,
                                      childWrapperClassName: s7.c6,
                                      children: (0, l.jsx)(il.D, { tag: "a", children: e }),
                                  },
                                  t,
                              ),
                    [r],
                );
            return null == s
                ? M.intl.format(M.t["eX6e/3"], { username: u.nick, usernameHook: o(u), channelHook: A })
                : M.intl.format(M.t.YUbgR8, {
                      userCount: i.length + 1,
                      username: u.nick,
                      usernameHook: o(u),
                      username2: h.nick,
                      username2Hook: c(h),
                      username3: g.nick,
                      username3Hook: d(g),
                      otherCount: i.length - 1,
                      othersHook: f([n, ...i]),
                      duration: s,
                  });
        })(t, n, t.author, r, s, c),
        m = a.useMemo(() => {
            let e = (0, l.jsx)(s0.VoiceNormalIcon, { size: "md", color: eA.A.colors.STATUS_POSITIVE });
            return null == c || null != s
                ? e
                : (0, l.jsx)(s1.T, {
                      channel: c,
                      children: (0, l.jsx)(s0.VoiceNormalIcon, { size: "md", color: eA.A.colors.STATUS_POSITIVE }),
                  });
        }, [c, s]);
    return (0, l.jsx)(T.A, { iconNode: m, timestamp: t.timestamp, compact: i, children: u });
}
var s9 = n(55010);
function s8(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: s } = t,
        a = t.getChannelId(),
        r = t.actor ?? void 0,
        o = (0, U.d8)(r, i),
        c = (0, j.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id }),
        d = (0, j.P)({ user: r, channelId: a, guildId: i.guild_id, messageId: t.id });
    return (0, l.jsx)(nA, {
        message: t,
        compact: n,
        appNameHook: c,
        addingUser: null != r ? o : null,
        addingUserHook: d,
    });
}
function s4(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: s } = t,
        a = t.getChannelId(),
        r = (0, j.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(so, { message: t, compact: n, usernameHook: r }),
            (0, l.jsx)(tK, { channel: i, message: t }),
        ],
    });
}
function le(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s } = t,
        { guild_id: r } = n,
        o = t.getChannelId(),
        c = (0, d.bG)([ei.A], () => ei.A.getGuild(r), [r]),
        u = a.useCallback(() => {
            null != c &&
                (0, N.K4)({
                    guildId: c.id,
                    location: { section: H.JJy.CHANNEL_TEXT_AREA, object: H.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [c]),
        m = (0, j.P)({ user: s, channelId: o, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, l.jsx)(sY, { message: t, compact: i, guild: c, usernameHook: m, onClickMessage: u });
}
function lt(e) {
    let t = e.getChannelId(),
        n = (0, d.bG)([tX.A], () => tX.A.getChannel(t), [t]),
        i = (null != n ? n.getGuildId() : null) ?? e.messageReference?.guild_id ?? null,
        s = (0, d.bG)([ei.A], () => (null != i ? ei.A.getGuild(i) : null), [i]),
        l =
            null == i
                ? void 0
                : () => {
                      (0, v.uh)(i);
                  };
    return { guildId: i, guildName: s?.name ?? null, onClickGuild: l };
}
function ln(e) {
    let { message: t, compact: n, channel: i } = e,
        s = (0, j.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
    return (0, l.jsx)(iw, { message: t, compact: n, usernameHook: s });
}
let li = Object.freeze({
        [H.lAJ.DEFAULT]: void 0,
        [H.lAJ.REPLY]: void 0,
        [H.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [H.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [H.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, d.bG)([R.default], () => R.default.getUser(t.mentions[0]), [t]),
                o = t$.Ay.getName(null, a, r),
                c = (0, j.P)({ user: s, channelId: a, guildId: n.guild_id, messageId: t.id }),
                u = (0, j.P)({ user: r, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, l.jsx)(ss, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: r,
                      actorUsernameHook: c,
                      targetUsernameHook: u,
                  })
                : (0, l.jsx)(i1, { message: t, compact: i, otherUsername: o, usernameHook: c, otherUsernameHook: u });
        },
        [H.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, d.bG)([R.default], () => R.default.getUser(t.mentions[0]), [t]),
                o = (0, j.P)({ user: s, channelId: a, guildId: n.guild_id, messageId: t.id }),
                c = (0, j.P)({ user: r, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, l.jsx)(sl, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: r,
                      actorUsernameHook: o,
                      targetUsernameHook: c,
                  })
                : null != r && r.id !== s.id
                  ? (0, l.jsx)(i2, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: o,
                        otherUser: r,
                        otherUsernameHook: c,
                    })
                  : (0, l.jsx)(i2, { message: t, channel: n, compact: i, usernameHook: o });
        },
        [H.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { id: s, author: r } = t,
                o = S.default.getId(),
                c = t.getChannelId(),
                u = (0, d.bG)([tW.A], () => tW.A.isCallActive(c, s), [c, s]),
                m = (0, d.bG)([tq.A], () => tq.A.getVoiceState(H.ME, o)),
                x = !u && null != t.call && !t.call.participants.includes(o),
                h = u && (null == m || m.channelId !== c),
                g = a.useCallback(() => {
                    ((0, p.lO)(_.A.CALL_SYSTEM_MESSAGE, p.OP.JOIN_CALL, c), f.default.selectVoiceChannel(c));
                }, [c]),
                A = (0, j.P)({
                    user: r,
                    channelId: c,
                    guildId: i.guild_id,
                    messageId: t.id,
                    enableDisplayNameStyles: !0,
                });
            return (0, l.jsx)(ij, {
                compact: n,
                message: t,
                missed: x,
                joinable: h,
                usernameHook: A,
                onClickJoinCall: g,
            });
        },
        [H.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, j.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iD, { compact: n, message: t, usernameHook: r, isForumPost: i.isForumPost() });
        },
        [H.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, j.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iy, { compact: n, message: t, usernameHook: r });
        },
        [H.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                r = t.getChannelId(),
                o = a.useCallback(() => {
                    if (tQ.Ay.getChannelId() !== r) {
                        let e = tX.A.getChannel(r);
                        null != e && (0, v.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => eY._.dispatch(H.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [r]),
                c = (0, j.P)({ user: s, channelId: r, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iP, { message: t, compact: n, usernameHook: c, onClickPins: __OVERLAY__ ? null : o });
        },
        [H.lAJ.USER_JOIN]: function (e) {
            return e.message.author.bot ? (0, l.jsx)(s8, { ...e }) : (0, l.jsx)(s4, { ...e });
        },
        [H.lAJ.GUILD_BOOST]: le,
        [H.lAJ.GUILD_BOOST_TIER_1]: le,
        [H.lAJ.GUILD_BOOST_TIER_2]: le,
        [H.lAJ.GUILD_BOOST_TIER_3]: le,
        [H.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, j.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iS, { message: t, compact: n, usernameHook: r });
        },
        [H.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                {
                    author: s,
                    author: { id: r },
                    messageReference: o,
                } = t,
                u = t.getChannelId(),
                m = (0, d.bG)([tY.A], () => tY.A.findActivity(r, (e) => e.type === c.$.PLAYING), [r]),
                x = (0, d.bG)([tX.A], () => (null != o ? tX.A.getChannel(o.channel_id) : null), [o]),
                h = o?.guild_id,
                g = (0, j.P)({ user: s, channelId: u, guildId: i.guild_id, messageId: t.id }),
                f = a.useCallback(() => {
                    null != x &&
                        null != h &&
                        (0, A.Nl)({ streamType: s9.U4.GUILD, ownerId: r, channelId: x.id, guildId: h });
                }, [r, x, h]);
            return null != o && null != x && null != o.guild_id
                ? (0, l.jsx)(iY, {
                      message: t,
                      compact: n,
                      channel: x,
                      playingActivity: m,
                      onJoinStream: f,
                      usernameHook: g,
                  })
                : null;
        },
        [H.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                { guildId: i, guildName: s, onClickGuild: a } = lt(t);
            return (0, l.jsx)(iB, {
                message: t,
                compact: n,
                guildName: s,
                onClick: function () {
                    null != i && eh.A.open(i, H.BEX.ACCESS, H.nd0.ACCESS_DISCOVERABLE);
                },
                onClickGuild: a,
            });
        },
        [H.lAJ.GUILD_DISCOVERY_REQUALIFIED]: function (e) {
            let { message: t, compact: i } = e;
            return (0, l.jsx)(T.A, {
                icon: n(222548),
                timestamp: t.timestamp,
                compact: i,
                contentClassName: iF.B,
                children: M.intl.string(M.t.tu6tOR),
            });
        },
        [H.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: function (e) {
            let { message: t, compact: n } = e,
                { guildName: i, onClickGuild: s } = lt(t);
            return (0, l.jsx)(iJ, { message: t, compact: n, guildName: i, onClickGuild: s });
        },
        [H.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: function (e) {
            let { message: t, compact: n } = e,
                { guildName: i, onClickGuild: s } = lt(t);
            return (0, l.jsx)(iz, { message: t, compact: n, guildName: i, onClickGuild: s });
        },
        [H.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                r = (0, j.P)({ user: t.author, channelId: t.channel_id, guildId: i.guild_id, messageId: t.id }),
                o = a.useCallback(
                    async (e) => {
                        let n = t.messageReference?.channel_id;
                        if (null != n) {
                            await tV.A.loadThread(n);
                            let t = tX.A.getChannel(n);
                            null != t && (0, tB.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                c = a.useCallback(() => {
                    (0, u.mM)(async () => {
                        let { default: e } = await Promise.all([
                            n.e(327744),
                            n.e(927517),
                            n.e(552705),
                            n.e(895851),
                            n.e(258528),
                            n.e(65225),
                        ]).then(n.bind(n, 126768));
                        return (t) => (0, l.jsx)(e, { channel: i, ...t });
                    });
                }, [i]),
                d = a.useCallback(
                    (e) => {
                        let i = tX.A.getChannel(t.messageReference?.channel_id);
                        null != i &&
                            (0, h.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(926132),
                                    n.e(391763),
                                    n.e(491001),
                                    n.e(382563),
                                    n.e(947502),
                                    n.e(603998),
                                    n.e(343266),
                                    n.e(965789),
                                    n.e(691671),
                                    n.e(412255),
                                    n.e(63340),
                                    n.e(896804),
                                    n.e(275289),
                                    n.e(421060),
                                    n.e(697367),
                                    n.e(699011),
                                    n.e(536478),
                                    n.e(703869),
                                    n.e(426760),
                                    n.e(420105),
                                ]).then(n.bind(n, 949488));
                                return (t) => (0, l.jsx)(e, { ...t, channel: i });
                            });
                    },
                    [t],
                );
            return (0, l.jsx)(si, {
                message: t,
                compact: s,
                usernameHook: r,
                onClickThread: o,
                onClickViewThreads: c,
                onContextMenuThread: d,
            });
        },
        [H.lAJ.THREAD_STARTER_MESSAGE]: function (e) {
            let { message: t, compact: n } = e;
            return (0, l.jsx)(T.A, {
                iconNode: (0, l.jsx)(st.ThreadIcon, { size: "md", color: "currentColor", className: sa.K }),
                timestamp: t.timestamp,
                compact: n,
                children: M.intl.string(M.t.OCs36J),
            });
        },
        [H.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [H.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, I.ER)(t) ? (0, l.jsx)(iI, { message: t, compact: n, channel: i }) : null;
        },
        [H.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ln,
        [H.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ln,
        [H.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                s = (0, j.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iK, { message: t, compact: n, channel: i, usernameHook: s });
        },
        [H.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                s = (0, j.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iZ, { message: t, compact: n, channel: i, usernameHook: s });
        },
        [H.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: function (e) {
            let { channel: t, message: i, compact: s } = e,
                r = (0, U.Ay)(i),
                o = (function (e) {
                    let { author: t, channel: n, message: i } = e,
                        s = n.guild_id,
                        l = (0, j.P)({ user: i.author, channelId: n.id, guildId: s, messageId: i.id })(t),
                        { analyticsLocations: r } = (0, B.Ay)(_.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                        o = i.roleSubscriptionData,
                        c = a.useCallback(() => {
                            ((0, v.pX)(H.BVt.CHANNEL(s, eo.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: r }),
                                o?.role_subscription_listing_id != null &&
                                    (0, J.xH)(s, n.id, i.id, o.role_subscription_listing_id));
                        }, [s, n, i, o, r]);
                    return null == o
                        ? null
                        : (0, J.gw)({
                              username: t.nick,
                              usernameOnClickHandler: l,
                              roleSubscriptionOnClickHandler: c,
                              guildId: s,
                              roleSubscriptionData: i.roleSubscriptionData,
                          });
                })({ channel: t, message: i, author: r }),
                c =
                    i.roleSubscriptionData?.total_months_subscribed != null &&
                    i.roleSubscriptionData?.total_months_subscribed <= 1;
            return null == o
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(T.A, { icon: n(617184), timestamp: i.timestamp, compact: s, children: o }),
                          c && (0, l.jsx)(eu, { guildId: t.guild_id, user: i.author, username: r.nick }),
                          (0, l.jsx)(el, { channel: t, message: i }),
                      ],
                  });
        },
        [H.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return t.purchaseNotification?.type === E.hE.GUILD_PRODUCT
                ? (0, l.jsx)(V, { message: t, channel: n, compact: i })
                : null;
        },
        [H.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [H.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, j.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                a = (0, d.bG)([em.Ay], () => em.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i4, { message: t, compact: i, usernameHook: s }),
                    null != a && a.name === t.content ? (0, l.jsx)(ex.A, { code: `${n.guild_id}-${a.id}` }) : null,
                ],
            });
        },
        [H.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, j.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(i6, { message: t, compact: i, usernameHook: s });
        },
        [H.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, j.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(i8, { message: t, compact: i, usernameHook: s });
        },
        [H.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, j.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                a = (0, d.bG)([X.A], () => X.A.can(H.xBc.MUTE_MEMBERS, n)),
                r = (0, d.bG)([tw.A], () => tw.A.getParticipant(n.id, t.author.id)),
                o =
                    new Date(Q.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(r?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                c = a && r?.rtsState === tF.zF.REQUESTED_TO_SPEAK && o;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i9, { message: t, compact: i, usernameHook: s }),
                    c
                        ? (0, l.jsx)(m.$, {
                              variant: "secondary",
                              onClick: function () {
                                  ((0, tH.lL)(n, t.author.id, !1), g.A.deleteMessage(n.id, t.id, !0));
                              },
                              text: M.intl.string(M.t.f0T7hI),
                              icon: x.MicrophoneArrowRightIcon,
                          })
                        : null,
                ],
            });
        },
        [H.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, j.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(se, { message: t, compact: i, usernameHook: s });
        },
        [H.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, U.Ay)(t),
                a = t.application,
                r = (0, j.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(T.A, {
                iconNode: (0, l.jsx)(t_.TicketIcon, { size: "md", color: "currentColor", className: tp.C }),
                timestamp: t.timestamp,
                compact: i,
                children: (function (e) {
                    let { application: t, username: n, usernameHook: i = H.tEg } = e;
                    return null != t
                        ? M.intl.format(M.t.dXdgno, { username: n, applicationName: t.name, usernameHook: i })
                        : M.intl.format(M.t.O829Uu, { username: n, usernameHook: i });
                })({ application: a, username: s.nick, usernameHook: r(s) }),
            });
        },
        [H.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                a = (0, U.Ay)(t),
                r = t.application,
                o = (0, j.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id }),
                c = tT(i, t);
            return (0, l.jsx)(T.A, {
                icon: n(617184),
                timestamp: t.timestamp,
                compact: s,
                children: (0, tj.eu)({
                    application: r,
                    username: a.nick,
                    usernameHook: o(a),
                    applicationNameHook: null != r ? c(r) : H.tEg,
                }),
            });
        },
        [H.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                a = (0, U.Ay)(t),
                r = t.application,
                o = (0, j.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id }),
                c = tT(i, t);
            return (0, l.jsx)(T.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: s,
                children: (0, tj.A0)({
                    application: r,
                    username: a.nick,
                    usernameHook: o(a),
                    applicationNameHook: null != r ? c(r) : H.tEg,
                }),
            });
        },
        [H.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, l.jsx)(tE, { userTrialOfferId: t.referralTrialOfferId, canRenderReferralEmbed: !0, compact: n });
        },
        [H.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [H.lAJ.CUSTOM_GIFT]: void 0,
        [H.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [H.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [H.lAJ.POLL_RESULT]: function (e) {
            let { message: t, channel: n, compact: i, disableInteraction: s = !1 } = e,
                r = t.embeds[0],
                o = a.useMemo(
                    () =>
                        (function (e) {
                            if (e?.fields == null) return null;
                            let t = {},
                                n = {};
                            for (let i of e.fields)
                                switch (i.rawName) {
                                    case "poll_question_text":
                                        t.questionText = i.rawValue;
                                        break;
                                    case "victor_answer_id":
                                        t.victorAnswerId = i.rawValue;
                                        break;
                                    case "victor_answer_text":
                                        t.victorAnswerText = i.rawValue;
                                        break;
                                    case "victor_answer_votes":
                                        t.victorAnswerVotes = parseInt(i.rawValue, 10);
                                        break;
                                    case "total_votes":
                                        t.totalVotes = parseInt(i.rawValue, 10);
                                        break;
                                    case "victor_answer_emoji_id":
                                        n.id = i.rawValue;
                                        break;
                                    case "victor_answer_emoji_name":
                                        n.name = i.rawValue;
                                        break;
                                    case "victor_answer_emoji_animated":
                                        n.animated = "true" === i.rawValue;
                                }
                            return (null != n.name && ((n.animated = n.animated ?? !1), (t.victorEmoji = n)), t);
                        })(r),
                    [r],
                ),
                c = (0, eD.EJ)(o?.questionText ?? "", 50),
                d = (0, U.Ay)(t),
                u = (0, j.P)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                    displayInline: !0,
                }),
                m = t.messageReference,
                x = a.useCallback(() => {
                    null != m &&
                        g.A.jumpToMessage({
                            channelId: m.channel_id,
                            messageId: m.message_id,
                            flash: !0,
                            returnMessageId: t.id,
                        });
                }, [t.id, m]);
            return null == o
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(T.A, {
                              iconNode: (0, l.jsx)(eU.PollsIcon, { size: "xs" }),
                              timestamp: t.timestamp,
                              compact: i,
                              children: M.intl.format(M.t.VJcK41, {
                                  username: d.nick,
                                  usernameHook: u(d),
                                  title: c,
                                  titleOnClick: x,
                              }),
                          }),
                          (0, l.jsx)(eB, { className: eH.E6, data: o, onClickPollLink: s ? void 0 : x }),
                      ],
                  });
        },
        [H.lAJ.CHANGELOG]: void 0,
        [H.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, l.jsx)(nh, { message: t, channel: n });
        },
        [H.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(ik, { message: t, channel: n, compact: i });
        },
        [H.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                s = (0, d.bG)([R.default], () => R.default.getUser(i?.recipientUserId));
            return null == i || null == s
                ? null
                : (0, l.jsx)(nc, { giftIntentType: i.giftIntentType, recipientUser: s, channel: n });
        },
        [H.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(i0, { message: t, channel: n, author: t.author, compact: i });
        },
        [H.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: c } = b(t, i),
                d = r?.user?.username,
                u = a?.name;
            return (0, l.jsx)(T.A, {
                icon: n(617184),
                timestamp: t.timestamp,
                compact: s,
                children:
                    null != d && null != u
                        ? M.intl.format(M.t["21R6Ch"], {
                              username: d,
                              usernameHook: o(),
                              guildName: u,
                              guildNameClick: c,
                          })
                        : M.intl.string(M.t["2VLV0d"]),
            });
        },
        [H.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: c } = b(t, i),
                d = r?.user?.username,
                u = a?.name;
            return (0, l.jsx)(T.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: s,
                children:
                    null != d && null != u
                        ? M.intl.format(M.t["Bz/QC2"], {
                              username: d,
                              usernameHook: o(),
                              guildName: u,
                              guildNameClick: c,
                          })
                        : M.intl.string(M.t.FVF6qU),
            });
        },
        [H.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: c } = b(t, i),
                d = r?.user?.username,
                u = a?.name;
            return (0, l.jsx)(T.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: s,
                children:
                    null != d && null != u
                        ? M.intl.format(M.t.Kpkesg, { username: d, usernameHook: o(), guildName: u, guildNameClick: c })
                        : M.intl.string(M.t.BMlbE7),
            });
        },
        [H.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [H.lAJ.EMOJI_ADDED]: void 0,
        [H.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [H.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [H.lAJ.REPORT_TO_MOD_BAN_USER]: tG,
        [H.lAJ.REPORT_TO_MOD_KICK_USER]: tG,
        [H.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: tG,
        [H.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: tG,
        [H.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: tG,
        [H.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(e4, { message: t, channel: n, compact: i });
        },
        [H.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(s5, { message: t, channel: n, compact: i });
        },
        [H.lAJ.FRIEND_REQUEST_ACCEPTED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(iH, { message: t, channel: n, compact: i });
        },
        [H.lAJ.MEDIA_MENTION_MESSAGE]: void 0,
        [H.lAJ.GUILD_SPACE_MESSAGE]: function (e) {
            let { message: t } = e,
                n = t.guildSpaceData?.whiteboard_busy;
            return null != n
                ? (0, l.jsx)(eb, { ...e, data: n })
                : null != t.guildSpaceData?.leaderboard
                  ? (0, l.jsx)(ej, { ...e })
                  : null != t.guildSpaceData?.music
                    ? (0, l.jsx)(eR, { ...e })
                    : null;
        },
    }),
    ls = {},
    ll = a.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: s } = e,
            { type: a } = t,
            { content: r } = (0, ng.A)(t, ls),
            o = li[a];
        if (null == o) {
            var c;
            return (
                (c = Error(`unknown message type ${t.type}`)),
                eQ.A.captureException(c),
                new C.A("SystemMessage").error("", c),
                null
            );
        }
        return (0, l.jsx)(nd.Ay, {
            message: t,
            content: r,
            compact: i ?? !1,
            children: (0, l.jsx)(o, { message: t, channel: n, compact: i, disableInteraction: s }),
        });
    });
function la(e) {
    let { message: t, channel: n, compact: i, disableInteraction: s } = e;
    return (0, o.A)(t) ? (0, l.jsx)(ll, { message: t, channel: n, compact: i, disableInteraction: s }) : null;
}
