n.d(t, { A: () => s7 });
var i,
    s,
    l = n(627968),
    a = n(64700),
    r = n.t(a, 2),
    o = n(143413),
    c = n(17928),
    d = n(192308),
    u = n(821609),
    m = n(117723),
    x = n(442433),
    h = n(720149),
    g = n(730852),
    _ = n(401843),
    A = n(155718),
    f = n(626584),
    E = n(874357),
    C = n(877133),
    p = n(509536),
    I = n(447215),
    N = n(888675),
    j = n(976860),
    T = n(495544),
    v = n(696451),
    S = n(287809),
    O = n(654265),
    R = n(375708);
let M = (e, t) => {
    let { joinRequest: n, joinRequestGuild: i } = (0, O.A)(t.id),
        s = (0, c.bG)([S.default], () => S.default.getUser(n?.userId)),
        l = (0, I.P)({ user: s, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
        r = (0, c.bG)([v.Ay, T.default], () => v.Ay.isMember(i?.id, T.default.getId())),
        o = a.useCallback(() => {
            r && null != i && (0, j.uh)(i.id);
        }, [i, r]);
    return { guild: i, joinRequest: n, usernameHook: l, guildNameClick: o };
};
var L = n(702841),
    y = n(834730),
    U = n(775602),
    D = n(763754),
    k = n(953727);
function b(e) {
    let { width: t = 440, height: n = 200, avatar: i, ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, k.A)(s),
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
var P = n(652215),
    G = n(310145);
function H(e) {
    let { guildId: t, user: n, username: i } = e,
        s = (0, L.bG)([U.A], () => !U.A.useReducedMotion),
        a = n.getAvatarURL(t, 56, s),
        r = (0, l.jsx)("img", { src: a, className: G.dj, alt: "" });
    return (0, l.jsxs)("div", {
        className: G.uE,
        role: "img",
        "aria-label": R.intl.formatToPlainString(R.t["utf8+W"], { username: i }),
        children: [
            (0, l.jsx)(b, { avatar: r }),
            (0, l.jsx)(y.E, {
                className: G.Bi,
                tag: "p",
                color: "status-positive-text",
                variant: "heading-xl/medium",
                children: R.intl.format(R.t["52BAtC"], {
                    username: i,
                    usernameHook: (e, t) =>
                        (0, l.jsx)(
                            y.E,
                            {
                                tag: "span",
                                color: "status-positive-text",
                                variant: "heading-xxl/extrabold",
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
function w(e) {
    let { channel: t, message: i, compact: s } = e,
        a = (0, D.Ay)(i),
        r = (0, I.P)({ user: i.author, channelId: t.id, guildId: t.guild_id, messageId: i.id })(a),
        o = R.intl.format(R.t.TQs67g, {
            username: a.nick,
            usernameHook: r,
            productName: i.purchaseNotification?.guild_product_purchase?.product_name ?? "",
            handleProductListingClick: () => {
                (0, j.pX)(
                    P.BVt.GUILD_PRODUCT(t.guild_id, i.purchaseNotification?.guild_product_purchase?.listing_id ?? ""),
                );
            },
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.A, { icon: n(617184), timestamp: i.timestamp, compact: s, children: o }),
            (0, l.jsx)(H, { username: a.nick, guildId: t.guild_id, user: i.author }),
        ],
    });
}
var F = n(793574),
    V = n(688810),
    B = n(942075),
    J = n(665260),
    z = n(355622),
    Z = n(148355),
    K = n(406704),
    X = n(576705),
    W = n(174459),
    Q = n(935208),
    Y = n(806150),
    q = n(968782);
function $(e) {
    let { assets: t, currentUser: n, message: i } = e,
        s = (Q.default.extractTimestamp(n.id) + Q.default.extractTimestamp(i.id)) % t.length;
    return t[s];
}
function ee(e) {
    let { currentUser: t, channel: n, message: i, buttonLabels: s, stickers: r, event: o, eventProperties: c } = e,
        d = a.useMemo(() => $({ assets: r, currentUser: t, message: i }), [r, t, i]),
        m = a.useMemo(() => $({ assets: s, currentUser: t, message: i }), [s, t, i]),
        x = a.useCallback(async () => {
            let { valid: e } = await (0, Y.i)({ type: z.oU.FORM, content: "", channel: n });
            e &&
                (!(function (e) {
                    let { channel: t, message: n, sticker: i } = e;
                    h.A.sendGreetMessage(
                        t.id,
                        i.id,
                        h.A.getSendMessageOptionsForReply({
                            channel: t,
                            message: n,
                            shouldMention: !0,
                            showMentionToggle: !0,
                        }),
                    );
                })({ channel: n, message: i, sticker: d }),
                (function (e) {
                    let { sticker: t, event: n, eventProperties: i } = e;
                    null != n && W.default.track(n, { ...i, sticker_id: t.id });
                })({ sticker: d, event: o, eventProperties: c }));
        }, [n, i, d, o, c]);
    return (0, l.jsx)(u.$, {
        icon: { type: "sticker", asset: d, component: Z.A },
        text: m,
        onClick: x,
        variant: "secondary",
    });
}
function et(e) {
    let { channel: t, message: n, buttonLabels: i, stickers: s, event: a, eventProperties: r } = e,
        o = S.default.getCurrentUser(),
        d = (function (e) {
            let { channel: t, message: n, currentUser: i } = e;
            return (0, c.bG)([X.A, v.Ay], () => {
                let e = t.guild_id;
                if (null == i || null == e) return !1;
                let s = (0, K.UJ)(t),
                    l = X.A.can(P.xBc.SEND_MESSAGES, t),
                    a = v.Ay.getMember(e, i.id)?.isPending,
                    r = n.author.bot;
                return l && !s && !a && !r;
            });
        })({ channel: t, message: n, currentUser: o });
    return null != o && d
        ? (0, l.jsx)("div", {
              className: q.S,
              children: (0, l.jsx)(ee, {
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
var en = n(71393),
    ei = n(226139);
function es(e) {
    let { channel: t, message: n } = e,
        i = n.roleSubscriptionData?.is_renewal ? (0, ei.J9)() : (0, ei.oL)(),
        s = t.guild_id,
        r = (0, c.bG)([en.A], () => en.A.getGuild(s)?.systemChannelFlags, [s]),
        o = null != r && (0, J.Lt)(r, P.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        d = a.useMemo(() => (0, B.y4)(t, n), [t, n]);
    return o
        ? null
        : (0, l.jsx)(et, {
              channel: t,
              message: n,
              buttonLabels: i,
              stickers: ei.D3,
              event: P.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: d,
          });
}
var el = n(690362);
function ea(e) {
    let { guildId: t, user: n, className: i } = e,
        s = (0, c.bG)([U.A], () => !U.A.useReducedMotion),
        a = n.getAvatarURL(t, 56, s),
        r = (0, l.jsx)("foreignObject", {
            x: "30",
            y: "68",
            width: "56",
            height: "56",
            transform: "skewX(12)",
            children: (0, l.jsx)("img", { src: a, className: el.dj, alt: "" }),
        });
    return (0, l.jsx)("div", {
        className: i,
        children: (0, l.jsxs)("svg", {
            width: "128",
            height: "200",
            viewBox: "0 0 128 200",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: el.JW,
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
var er = n(746080),
    eo = n(88069);
function ec(e) {
    let { username: t } = e;
    return (0, l.jsx)("div", {
        className: eo._X,
        children: (0, l.jsx)(y.E, {
            tag: "p",
            className: eo._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: R.intl.format(R.t.MLKSln, {
                username: t,
                usernameHook: (e, t) =>
                    (0, l.jsx)(
                        y.E,
                        {
                            tag: "span",
                            color: "status-positive-text",
                            variant: "heading-xxl/extrabold",
                            lineClamp: 3,
                            children: e,
                        },
                        t,
                    ),
            }),
        }),
    });
}
function ed(e) {
    let { guildId: t, user: n, username: i } = e;
    return (0, l.jsxs)("div", {
        className: eo.pG,
        role: "img",
        "aria-label": R.intl.formatToPlainString(R.t["utf8+W"], { username: i }),
        children: [(0, l.jsx)(ea, { guildId: t, user: n, className: eo.sz }), (0, l.jsx)(ec, { username: i })],
    });
}
var eu = n(698441),
    em = n(484724),
    ex = n(468689),
    eh = n(503698),
    eg = n.n(eh),
    e_ = n(23339),
    eA = n(661531),
    ef = n(642846),
    eE = n(565645),
    eC = n(306417),
    ep = n(412136),
    eI = n(972778);
function eN() {
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
function ej(e) {
    let t,
        { hasNoVotes: n, victorEmoji: i } = e;
    if (n) t = (0, l.jsx)(eN, {});
    else if (null != i) {
        let e = "" !== i.name ? i.name : i.displayName;
        t = (0, l.jsx)(eE.A, { emojiId: i.id, emojiName: e, animated: i.animated });
    }
    return null != t ? (0, l.jsx)("div", { className: eI.ZS, children: t }) : null;
}
function eT(e) {
    let t,
        { type: n, ...i } = e,
        s = "text-muted";
    switch (n) {
        case "NO_VOTES":
            t = (0, l.jsx)(y.E, {
                variant: "text-sm/semibold",
                color: "text-default",
                scaleFontToUserSetting: !0,
                children: R.intl.string(R.t["a+lSZ/"]),
            });
            break;
        case "VICTOR":
            let { victorAnswerText: a, victorVotePercentage: r } = i;
            t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: eI.sj,
                        children: [
                            (0, l.jsx)(y.E, {
                                variant: "text-sm/semibold",
                                color: "text-default",
                                className: eI.Dq,
                                scaleFontToUserSetting: !0,
                                children: a,
                            }),
                            (0, l.jsx)(eC.Vx, { size: 16, className: eI.To, isVictor: !0, isExpired: !0 }),
                        ],
                    }),
                    (0, l.jsxs)(y.E, {
                        variant: "text-xs/medium",
                        color: s,
                        scaleFontToUserSetting: !0,
                        children: [R.intl.string(R.t.ufIDIx), " \u2022 ", r, "%"],
                    }),
                ],
            });
            break;
        case "TIE":
            let { tiedVotePercentage: o } = i;
            t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(y.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        scaleFontToUserSetting: !0,
                        children: R.intl.string(R.t.kPN9si),
                    }),
                    (0, l.jsxs)(y.E, {
                        variant: "text-xs/medium",
                        color: s,
                        scaleFontToUserSetting: !0,
                        children: [o, "%"],
                    }),
                ],
            });
    }
    return (0, l.jsx)("div", { className: eI.h_, children: t });
}
function ev(e) {
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
        className: eg()(eI.kL, { [eI.FS]: r }, t),
        children: [
            (0, l.jsx)(ej, { hasNoVotes: "NO_VOTES" === s.type, victorEmoji: n.victorEmoji }),
            (0, l.jsx)(eT, { ...s }),
            null != i &&
                (0, l.jsx)(u.$, { size: "sm", onClick: i, variant: "secondary", text: R.intl.string(R.t.Jw7Vbf) }),
        ],
    });
}
var eS = n(735438),
    eO = n(403581),
    eR = n(331322),
    eM = n(508770),
    eL = n(863574),
    ey = n(811656),
    eU = n(166403),
    eD = n(625494),
    ek = n(38405),
    eb = n(427262),
    eP = n(573359),
    eG = n(59784),
    eH = n(39423),
    ew = n(88001),
    eF = n(466919),
    eV = n(539550),
    eB = n(421438);
let eJ = (e) => {
        let { disabled: t, invite: i, isExistingSub: s } = e;
        return (0, l.jsx)(u.$, {
            variant: "expressive",
            size: "md",
            text: R.intl.string(eF.default.rjuKse),
            icon: eO.t,
            onClick: () => {
                if (null == i) return;
                let e = i.subscription,
                    t = i.id,
                    a = S.default.getUser(i.primary_user);
                if (null == a) return;
                let r = (0, eb.$3)(a);
                W.default.track(P.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, { invite_id: t, subscription_id: e });
                let o = (0, eS.uniqueId)("premium-group-accept-invite-modal"),
                    c = !1;
                (0, d.openModalLazy)(
                    async () => {
                        let { default: i } = await Promise.all([
                            n.e("54266"),
                            n.e("65243"),
                            n.e("25279"),
                            n.e("99910"),
                        ]).then(n.bind(n, 826181));
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
                                        eD._.dispatch(P.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        eP.A.isDisplayingWowMomentConfirmation && eP.A.isAnimated
                                            ? setTimeout(() => {
                                                  n.onClose();
                                              }, ey.K)
                                            : await n.onClose());
                                },
                            });
                    },
                    {
                        onCloseRequest: () => {
                            c ||
                                ((c = !0),
                                eD._.dispatch(P.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                eP.A.isDisplayingWowMomentConfirmation && eP.A.isAnimated
                                    ? setTimeout(() => {
                                          (0, d.closeModal)(o);
                                      }, ey.K)
                                    : (0, d.closeModal)(o));
                        },
                        modalKey: o,
                    },
                );
            },
            disabled: t,
        });
    },
    ez = (e) => {
        let { disabled: t, invite: i, channel: s } = e;
        return (0, l.jsx)(u.$, {
            variant: "secondary",
            size: "md",
            text: R.intl.string(eF.default["eYHh+z"]),
            onClick: () => {
                if (null == i || !s.isDM())
                    return void ek.A.captureMessage("CancelInviteButton onClick: unexpected state", {
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
                    t = S.default.getUser(e);
                null != t &&
                    (W.default.track(P.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: i.id,
                        subscription_id: i.subscription,
                        invited_user_id: e,
                    }),
                    (0, d.openModalLazy)(async () => {
                        let { default: e } = await n.e("15554").then(n.bind(n, 115225));
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
    },
    eZ = (e) => {
        let { message: t, header: n, body: i, compact: s, actionButton: a } = e;
        return (0, l.jsxs)(N.A, {
            className: eV.og,
            compact: s,
            iconNode: (0, l.jsx)(eO.t, { size: "md", color: eA.A.colors.ICON_STRONG }),
            children: [
                (0, l.jsx)(y.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                (0, l.jsxs)(eR.B, {
                    direction: "horizontal",
                    className: eV.x,
                    children: [
                        (0, l.jsx)("img", { src: eB, alt: "", className: eV.Sl }),
                        (0, l.jsxs)("div", {
                            className: eV.Qs,
                            children: [
                                (0, l.jsx)(eM.E, { type: "beta", variant: "expressive" }),
                                (0, l.jsx)("h2", { className: eV.DD, children: n }),
                                (0, l.jsx)(y.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                                null != a && (0, l.jsx)("div", { className: eV.UD, children: a }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    eK = (e) => {
        let { message: t, channel: n, compact: i } = e,
            s = t.premiumGroupInviteId,
            {
                inviteState: a,
                isFetching: r,
                invite: o,
                currentUser: d,
                premiumSubscription: u,
            } = (0, c.cf)(
                [eG.A, S.default, eU.A],
                () => ({
                    inviteState: null != s ? eG.A.getInviteState(s) : ew.xI.NOT_FOUND,
                    isFetching: null != s && eG.A.isFetching(s),
                    invite: null != s ? eG.A.getInvite(s)?.invite : null,
                    currentUser: S.default.getCurrentUser(),
                    premiumSubscription: eU.A.getPremiumSubscription(),
                }),
                [s],
            );
        if (null == d) return null;
        let m = t.author,
            x = d.id === m.id;
        if (r || a === ew.xI.FETCHING || a === ew.xI.UNKNOWN) return (0, l.jsx)(eL.Wb, { isHorizontal: !0 });
        let h = (0, eH.o1)({ sender: m, channel: n, isSender: x, inviteState: a });
        if (null == h) return null;
        let g = a === ew.xI.PENDING,
            _ = null;
        return (
            (_ = x
                ? g
                    ? (0, l.jsx)(ez, { disabled: !1, invite: o, channel: n })
                    : a === ew.xI.REMOVED
                      ? (0, l.jsx)(ez, { disabled: !0, invite: o, channel: n })
                      : null
                : (0, l.jsx)(eJ, { disabled: !g, invite: o, isExistingSub: null != u })),
            (0, l.jsx)(eZ, { message: h.message, header: h.header, body: h.body, compact: i, actionButton: _ })
        );
    };
var eX = n(989349),
    eW = n.n(eX),
    eQ = n(607399),
    eY = n(144165),
    eq = n(534514),
    e$ = n(532794),
    e0 = n(58703),
    e1 = n(975571),
    e2 = n(428262),
    e3 = n(851746),
    e7 = n(727949),
    e6 = n(664654),
    e9 = n(212737),
    e5 = n(465794),
    e4 = n(378135),
    e8 = n(788868),
    te = n(613444),
    tt = n(954457);
class tn extends a.Component {
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
        super(e),
            (this.trialOffer = e.trialOffer),
            (this.referralsSent = e.referralsSent),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, e4.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
    getSystemMessageHeader() {
        let e = S.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return R.intl.format(R.t["4/EMxl"], { receiver: e?.username });
        let t = S.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return R.intl.format(R.t.yisueA, { sender: n, helpdeskArticle: e1.A.getArticleURL(P.MVz.REFERRAL_PROGRAM) });
    }
    getTitleText() {
        let e = S.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = S.default.getUser(this.trialOffer.referrer_id),
            i = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? R.intl.formatToPlainString(R.t["Mptau/"], { username: t })
            : this.offerExpired
              ? this.isSender
                  ? R.intl.string(R.t["9SNdf4"])
                  : R.intl.formatToPlainString(R.t["H0+MxK"], { userName: i })
              : R.intl.formatToPlainString(R.t.IiWKwg, { senderUserName: i, recipientUserName: t });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? R.intl.format(R.t.LwCwT9, { helpdeskArticle: e1.A.getArticleURL(P.MVz.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : R.intl.string(R.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, e2.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, e4.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, l.jsxs)("div", {
            className: te.UD,
            children: [
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(u.$, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: R.intl.string(R.t.O0etsF),
                        onClick: () => {
                            (0, e$.A)({
                                initialPlanId: null,
                                subscriptionTier: e8.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, l.jsx)("div", { className: te.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return R.intl.formatToPlainString(R.t.nP0ivR, { date: (0, e0.i$)(eW()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = eW()(e.expires_at);
        return this.offerExpired
            ? R.intl.formatToPlainString(R.t.PuSHfU, { date: (0, e0.i$)(eW()(n), "LL") })
            : (0, e7.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, l.jsx)("div", { className: te.Qj });
    }
    render() {
        let e = () => {
                let e = S.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : "???",
                    n = S.default.getUser(this.trialOffer.referrer_id),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: R.intl.formatToPlainString(R.t.qABVhL, { recipient: t }),
                            bodyText: R.intl.formatToPlainString(R.t.u7hyDx, {
                                helpdeskArticle: e1.A.getArticleURL(P.MVz.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: R.intl.string(R.t.LAGZfq),
                            bodyText: R.intl.formatToPlainString(R.t["0gnFLC"], { recipient: t }),
                        };
                return this.offerExpired
                    ? {
                          headerText: R.intl.string(R.t.nYvpUl),
                          bodyText: R.intl.formatToPlainString(R.t.wJdBEZ, { sender: i }),
                      }
                    : {
                          headerText: R.intl.string(R.t.HtTvXA),
                          bodyText: R.intl.formatToPlainString(R.t.wOQByA, { sender: i }),
                      };
            },
            t = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(e5.A, {
                        subscriptionTier: e8.pe.TIER_2,
                        buttonTextOverride: R.intl.string(R.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, l.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            i = (0, l.jsx)(u.$, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t, startingScreen: i } = e;
                        W.default.track(P.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                                return (t) => (0, l.jsx)(e, { ...t, startingScreen: i });
                            });
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === e6.Z
                                ? e9.SelectFriendsModalScreens.REMINDER
                                : e9.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: R.intl.string(R.t.Lm2nFc),
            }),
            s = this.isSender ? i : t,
            a = (0, l.jsx)(eY._, { src: tt.A, height: 84, width: 144, className: te.ms }),
            { headerText: r, bodyText: o } = e();
        return (0, l.jsxs)(N.A, {
            className: te.SB,
            iconNode: (0, l.jsx)(eO.t, { size: "md", color: eA.A.colors.ICON_STRONG }),
            iconContainerClassName: te.J5,
            compact: this.compact,
            children: [
                (0, l.jsx)(y.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, l.jsxs)("div", {
                    className: te.i2,
                    children: [
                        a,
                        (0, l.jsxs)("div", {
                            className: te.KX,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: te.xJ,
                                    children: [
                                        (0, l.jsx)(eq.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: r,
                                        }),
                                        (0, l.jsx)(y.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: te.ox, children: s }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function ti(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        {
            trialOffer: s,
            isResolving: a,
            referralsSent: r,
        } = (0, c.cf)(
            [e3.A],
            () => ({
                trialOffer: n ? e3.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && e3.A.isResolving(t),
                referralsSent: e3.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        o = S.default.getCurrentUser(),
        d = (0, c.bG)(
            [S.default],
            () => null != s && (0, e2.TW)(void 0 !== o && s.user_id === o.id ? o : S.default.getUser(s.user_id)),
        ),
        u = (0, c.bG)([eU.A], () => (d ? eU.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: m } = (0, V.Ay)(F.A.SHARE_NITRO_EMBED);
    return a
        ? (0, l.jsx)(eL.Wb, { isHorizontal: !eQ.Fr })
        : n && null != s && void 0 !== o
          ? (0, l.jsx)(tn, {
                trialOffer: s,
                referralsSent: r,
                currentUser: o,
                recipientHasNitro: d,
                trialEndsAt: u,
                analyticsLocations: m,
                compact: i,
            })
          : (0, l.jsx)("div", { className: te.TU, children: (0, l.jsx)("div", { className: te.Gq }) });
}
var ts = n(638916),
    tl = n(66059),
    ta = n(349288),
    tr = n(342296),
    to = n(486020),
    tc = n(552691);
function td(e, t) {
    let n = a.useRef(null);
    return a.useCallback(
        (i) => (s, a) => {
            let r = to.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, bot: i.bot, botIconFirst: !0 }),
                { bot: o } = i;
            return null == o
                ? s
                : (0, l.jsx)(
                      tr.A,
                      {
                          targetElementRef: n,
                          userId: o.id,
                          avatarUrl: r,
                          guildId: e.guild_id,
                          channelId: e.id,
                          messageId: t.id,
                          clickTrap: !0,
                          children: (e) => (0, l.jsx)(ta.Anchor, { ...e, ref: n, children: s }),
                      },
                      a,
                  );
        },
        [e, t.id],
    );
}
var tu = n(448761),
    tm = n(215026),
    tx = n(905499),
    th = n(60270),
    tg = n(241326),
    t_ = n(478016),
    tA = n(221314);
let tf = {
        [tu.l.REPORT_TO_MOD_BAN_USER]: () => tA.default.komFTv,
        [tu.l.REPORT_TO_MOD_KICK_USER]: () => tA.default.FAJmJV,
        [tu.l.REPORT_TO_MOD_TIMEOUT_USER]: () => tA.default["90r/sR"],
    },
    tE = {
        [tu.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => tA.default["4023i8"],
        [tu.l.REPORT_TO_MOD_CLOSED_REPORT]: () => tA.default.UE81zV,
    };
function tC(e) {
    let { type: t } = e,
        n = null;
    switch (t) {
        case tu.l.REPORT_TO_MOD_BAN_USER:
            n = tm.w;
            break;
        case tu.l.REPORT_TO_MOD_KICK_USER:
            n = tx.N;
            break;
        case tu.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = th.g;
            break;
        case tu.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = tg.u;
            break;
        case tu.l.REPORT_TO_MOD_CLOSED_REPORT:
            n = t_.U;
    }
    return null != n ? (0, l.jsx)(n, { size: "refresh_sm", color: "currentColor" }) : null;
}
function tp(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s, mentions: a, type: r } = t,
        o = (0, D.Ay)(t),
        d = t.getChannelId(),
        u = (0, c.bG)([S.default], () => S.default.getUser(a[0]), [a]),
        m = (0, D.m2)(s, n),
        x = (0, I.P)({ user: s, channelId: d, guildId: n.guild_id, messageId: t.id })(m),
        h = (0, D.d8)(u, n),
        g = (0, I.P)({ user: u, channelId: d, guildId: n.guild_id, messageId: t.id })(h),
        _ = tf[r] ?? null;
    if (null == _) return null;
    let A = R.intl.format(_(), { actorName: o.nick, actorHook: x, targetName: h?.nick, targetHook: g });
    return (0, l.jsx)(N.A, { iconNode: (0, l.jsx)(tC, { type: r }), timestamp: t.timestamp, compact: i, children: A });
}
function tI(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s, type: a } = t,
        r = (0, D.Ay)(t),
        o = t.getChannelId(),
        c = (0, D.m2)(s, n),
        d = (0, I.P)({ user: s, channelId: o, guildId: n.guild_id, messageId: t.id })(c),
        u = tE[a] ?? null;
    if (null == u) return null;
    let m = R.intl.format(u(), { actorName: r.nick, actorHook: d });
    return (0, l.jsx)(N.A, { iconNode: (0, l.jsx)(tC, { type: a }), timestamp: t.timestamp, compact: i, children: m });
}
function tN(e) {
    let { message: t, channel: n, compact: i } = e,
        { type: s } = t;
    return s === tu.l.REPORT_TO_MOD_BAN_USER ||
        s === tu.l.REPORT_TO_MOD_KICK_USER ||
        s === tu.l.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, l.jsx)(tp, { message: t, channel: n, compact: i })
        : (0, l.jsx)(tI, { message: t, channel: n, compact: i });
}
var tj = n(849736),
    tT = n(63995),
    tv = n(105530),
    tS = n(353202),
    tO = n(747926);
let tR = [
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
var tM = n(914342);
let tL = (e) => {
        var t;
        let n,
            i,
            { channel: s, message: r } = e,
            o =
                ((t = r.id),
                (i =
                    ((null != (n = S.default.getCurrentUser()?.id) ? Q.default.extractTimestamp(n) : 0) +
                        Q.default.extractTimestamp(t)) %
                    tR.length),
                tR[i]),
            c = a.useCallback(() => {
                (0, Y.i)({ type: z.oU.FORM, content: "", channel: s }).then((e) => {
                    let { valid: t } = e;
                    if (t) {
                        var n;
                        (n = o.id),
                            h.A.sendGreetMessage(
                                s.id,
                                n,
                                h.A.getSendMessageOptionsForReply({
                                    channel: s,
                                    message: r,
                                    shouldMention: !0,
                                    showMentionToggle: !0,
                                }),
                            ),
                            W.default.track(P.HAw.WELCOME_CTA_CLICKED, {
                                is_reply: !0,
                                sticker_id: n,
                                target_user: r.author.id,
                                sender: S.default.getCurrentUser()?.id,
                            });
                    }
                });
            }, [s, r, o]);
        return (0, l.jsx)("div", {
            className: tM.T,
            children: (0, l.jsx)(u.$, {
                icon: { type: "sticker", asset: o, component: Z.A },
                text: R.intl.string(R.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary",
            }),
        });
    },
    ty = (e) => {
        let { message: t, channel: n } = e,
            i = n.getGuildId(),
            s = (0, c.bG)([S.default, X.A, en.A, v.Ay], () => {
                let e = S.default.getCurrentUser(),
                    s = (0, K.UJ)(n),
                    l = X.A.can(P.xBc.SEND_MESSAGES, n),
                    a = null != i && null != e && v.Ay.getMember(i, e.id)?.isPending,
                    r = t.author.bot,
                    o = en.A.getGuild(i),
                    c = null != o && (o.systemChannelFlags & P.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return l && !s && !a && !r && c;
            });
        return null != i && s ? (0, l.jsx)(tL, { message: t, channel: n }) : null;
    };
var tU = n(470710),
    tD = n(734057),
    tk = n(290863),
    tb = n(309010),
    tP = n(977997),
    tG = n(562153),
    tH = n(465364),
    tw = n(782603),
    tF = n(562708),
    tV = n(778712),
    tB = n(214947),
    tJ = n(597770),
    tz = n(966327),
    tZ = n(139286),
    tK = n(427358),
    tX = n(242874),
    tW = n(275759),
    tQ = n(51501),
    tY = n(751188),
    tq = n(742345);
let t$ = (0, tV.FT)(tV._3.SIZE_56),
    t0 = (0, tV.FT)(tV._3.SIZE_24);
function t1(e) {
    let { user: t, ariaLabel: n, showCutout: i } = e,
        s = a.useId(),
        r = "u" > typeof document && document.documentElement?.dir === "rtl" ? -2 : t$ - t0 - -2,
        o = t$ - t0 - -3;
    return (0, l.jsxs)("svg", {
        width: t$,
        height: t$,
        viewBox: `0 0 ${t$} ${t$}`,
        className: tq.XH,
        children: [
            i &&
                (0, l.jsxs)("mask", {
                    id: s,
                    maskUnits: "userSpaceOnUse",
                    children: [
                        (0, l.jsx)("rect", { x: 0, y: 0, width: t$, height: t$, fill: "white" }),
                        (0, l.jsx)("circle", { cx: r + t0 / 2, cy: o + t0 / 2, r: t0 / 2 + 2, fill: "black" }),
                    ],
                }),
            (0, l.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: t$,
                height: t$,
                mask: i ? `url(#${s})` : void 0,
                children: (0, l.jsx)(tz.A, { className: tq.A6, user: t, "aria-label": n, size: tV._3.SIZE_56 }),
            }),
        ],
    });
}
function t2(e) {
    let { giftIntentType: t, recipientUser: i, analyticsPage: s, analyticsSection: r, innerRef: o } = e,
        m = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        { analyticsLocations: x } = (0, V.Ay)(F.A.PREMIUM_GIFT_INTENT_CARD),
        h = (0, c.bG)([tW.Ay], () => tW.Ay.getFriendAnniversaryYears(i.id)),
        g = (0, tQ.$)(t),
        { openGiftModal: _ } = (0, tY.$)({
            giftRecipient: i,
            analyticsLocations: x,
            analyticsLocation: g.chat,
            analyticsObject: { page: s, section: r, object: P.ZSU.BUTTON_CTA, objectType: P.AnalyticsObjectTypes.GIFT },
            location: "gift-intent-card",
        });
    a.useEffect(() => {
        (0, tZ.x)({
            name: tF.ImpressionNames.GIFT_INTENT_CARD,
            type: tF.ImpressionTypes.VIEW,
            properties: { gift_intent_type: t, num_friend_anniversaries: tW.Ay.getFriendAnniversaries().length },
        });
    }, [t]);
    let A = () => (t === e8.np.FRIEND_ANNIVERSARY ? R.intl.string(R.t.ilhtIa) : (0, tX.yE)(t));
    return (0, l.jsx)("div", {
        ref: o,
        className: tq.Qs,
        children: (0, l.jsxs)("div", {
            className: tq.gx,
            children: [
                (0, l.jsxs)("div", {
                    className: tq.ou,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tq.HD,
                            children: [
                                (0, l.jsx)(t1, { user: i, ariaLabel: i.username, showCutout: null != m }),
                                null != m &&
                                    (0, l.jsx)(tz.A, {
                                        className: tq.GM,
                                        user: m,
                                        "aria-label": i.username,
                                        size: tV._3.SIZE_24,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: tq.FS,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 3,
                                    children:
                                        t === e8.np.FRIEND_ANNIVERSARY ? R.intl.string(R.t.CeQIwZ) : (0, tX.yE)(t),
                                }),
                                (0, l.jsxs)("div", {
                                    className: tq.jA,
                                    children: [
                                        (0, l.jsx)(tB.$, { size: "xs" }),
                                        (0, l.jsx)(y.E, {
                                            className: tq.Tm,
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children:
                                                t === e8.np.FRIEND_ANNIVERSARY
                                                    ? R.intl.formatToPlainString(R.t.PpG27s, { numberOfYears: h })
                                                    : (0, tX.yE)(t),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tq.UD,
                    children: [
                        (0, l.jsx)(u.$, {
                            size: "sm",
                            variant: "secondary",
                            text: R.intl.string(R.t.nffuyb),
                            "aria-label": R.intl.string(R.t.nffuyb),
                            onClick: (e) => {
                                e.stopPropagation(),
                                    W.default.track(P.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: t,
                                        cta_type: "send_message",
                                        location_stack: x,
                                    }),
                                    (0, d.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("22638"), n.e("95501")]).then(
                                            n.bind(n, 367516),
                                        );
                                        return (n) =>
                                            (0, l.jsx)(e, { ...n, giftIntentType: t, analyticsLocationHistory: x });
                                    });
                            },
                        }),
                        (0, l.jsx)(u.$, {
                            size: "sm",
                            variant: "expressive",
                            text: A(),
                            icon: tJ.o,
                            "aria-label": A(),
                            onClick: (e) => {
                                e.stopPropagation();
                                let n = tK.A.getUserAffinity(i.id);
                                W.default.track(P.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                                    gift_intent_type: t,
                                    affinity: n?.dmProbability,
                                    location_stack: x,
                                }),
                                    _();
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}
var t3 = n(871237),
    t7 = n(905792);
function t6(e) {
    let { giftIntentType: t, recipientUser: n, channel: i } = e;
    return (0, l.jsx)(N.A, {
        contentClassName: t7.o9,
        iconContainerClassName: t7.zc,
        iconNode: (0, l.jsx)(tw.X, { colorClass: t7.Kk }),
        children: (0, l.jsx)(t2, {
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, t3.DJ)(i),
            analyticsSection: P.JJy.CHANNEL,
        }),
    });
}
var t9 = n(291812),
    t5 = n(862482),
    t4 = n(725807),
    t8 = n(335364);
function ne(e) {
    let { message: t, channel: n } = e,
        i = null != n.guild_id ? P.JJy.TEXT_IN_VOICE : P.JJy.CHANNEL_TEXT_AREA;
    return (0, l.jsx)(N.A, {
        contentClassName: t8.o9,
        iconContainerClassName: t8.zc,
        iconNode: (0, l.jsx)(tw.X, { colorClass: t8.Kk }),
        children: (0, l.jsxs)("div", {
            className: t8.kL,
            children: [
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(y.E, { variant: "text-sm/medium", children: t.content }),
                        (0, l.jsxs)("div", {
                            className: t8.C5,
                            children: [
                                (0, l.jsx)(eO.t, { size: "xs", colorClass: t8.bu }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-xs/medium",
                                    className: t8.vp,
                                    children: R.intl.string(R.t["BMw+7I"]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: t8.UD,
                    children: (0, l.jsx)(t4.A, {
                        showGradient: !0,
                        iconClassName: t8.PC,
                        subscriptionTier: e8.pe.TIER_2,
                        textOptions: { textOverride: R.intl.string(R.t.Y2WKTl) },
                        size: t5.$n.Sizes.SMALL,
                        premiumModalAnalyticsLocation: { section: i, object: P.ZSU.MESSAGE },
                    }),
                }),
            ],
        }),
    });
}
var nt = n(837381),
    nn = n(990078),
    ni = n(933832),
    ns = n(138134),
    nl = n(231483),
    na = n(123292),
    nr = n(709066),
    no = n(845625),
    nc = n(449585),
    nd = n(995786),
    nu = n(741231),
    nm = n(378570),
    nx = n(589022),
    nh = n(367513),
    ng = n(47167),
    n_ = n(332173),
    nA = n(95701),
    nf = n(994500),
    nE = n(449054);
function nC(e) {
    let { channel: t, onClick: n, beforeTransition: i, className: s, openChatWithoutConnecting: a } = e,
        r = (0, c.bG)([S.default, nf.A], () => (null == t ? "" : (0, ng.m1)(t, S.default, nf.A)), [t]);
    return (0, l.jsx)(nn.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: r,
        position: "top",
        children: (0, l.jsx)(n_.A, {
            role: "link",
            className: s,
            onClick: (e) => {
                e.stopPropagation(),
                    null != n
                        ? n()
                        : (null != i && i(),
                          (0, d.closeAllModals)(),
                          (function (e, t) {
                              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              if (null == e || null == t) return;
                              let i = en.A.getGuild(e);
                              if (i?.joinedAt == null) return nE.Z2(e, {}, { channelId: t });
                              let s = tD.A.getChannel(t);
                              if (null != s && (0, nA.ay)(s.type)) {
                                  if (n) {
                                      nh.A.updateChatOpen(s.id, !0), (0, j.pX)(P.BVt.CHANNEL(e, t));
                                      return;
                                  }
                                  g.default.selectVoiceChannel(s.id);
                                  return;
                              }
                              (0, j.pX)(P.BVt.CHANNEL(e, t));
                          })(t?.guild_id, t?.id, a));
            },
            iconType: (0, t3.QG)(t),
            children: r,
        }),
    });
}
var np = n(491182),
    nI = n(639288),
    nN = n(818855);
function nj(e) {
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
        u = (0, D.Ay)(t);
    return (0, l.jsx)("div", {
        className: eg()({ [nN.Ym]: c }, nN.gD, { [nN.oE]: a }, s),
        children: (0, l.jsx)(np.A, {
            ...d,
            className: eg()(nN.zC, { [nN.oE]: a }),
            childrenMessageContent: (0, l.jsx)(t9.Ay, {
                className: eg()(nN.__invalid_messageContent, { [nN.oE]: a }),
                message: t,
                content: i,
                compact: a ?? !1,
            }),
            childrenHeader: (0, l.jsx)(nI.Ay, {
                message: t,
                channel: n,
                author: u,
                guildId: n?.guild_id,
                compact: a,
                hideTimestamp: o,
                className: eg()(nN.wx, { [nN.oE]: a }),
                ...(r ?? {}),
            }),
            compact: a,
            author: u,
        }),
    });
}
var nT = n(10364),
    nv = n(112758),
    nS = n(754459),
    nO = n(97808),
    nR = n(3451),
    nM = n(19575),
    nL = n(609836);
let ny = nM.Ay.getEnableHardwareAcceleration() ? nO.Js : nO.eu;
function nU() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        [t, n] = a.useState(!1),
        i = (0, c.bG)([U.A], () => U.A.useReducedMotion),
        s = a.useMemo(() => {
            let n = t || (!i && !e);
            return (0, nR.q)(n);
        }, [t, i, e]);
    return {
        avatarSrc: s,
        eventHandlers: { onMouseEnter: a.useCallback(() => n(!0), []), onMouseLeave: a.useCallback(() => n(!1), []) },
    };
}
function nD(e) {
    let { src: t } = e;
    return (0, l.jsx)("div", {
        className: nL.H,
        children: (0, l.jsx)(ny, { src: t, size: tV._3.SIZE_40, "aria-label": R.intl.string(R.t.hG1StD) }),
    });
}
var nk = n(381941),
    nb = n(705751),
    nP = n(200700);
function nG(e, t) {
    let { popouts: n, selected: i, setPopout: s } = (0, nS.A)(e.id, nk.Fd),
        { usernameProfile: l, avatarProfile: r } = n,
        o = (0, nv.r4)(e.author.id, t.id),
        c = (0, nv.UY)(e.author.id, t.id, e.id),
        d = (0, nv.m)(e, t, l, s);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: (0, nv.Jo)(r, s),
        onPopoutRequestClose: a.useCallback(
            () => s({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
            [s],
        ),
        renderPopout: nT.A,
        showAvatarPopout: r,
        showUsernamePopout: l,
    };
}
function nH(e, t, n) {
    return a.useMemo(() => {
        if (null != t && null != n)
            return (i) => (0, l.jsx)(nx.A, { ...i, user: t, currentUser: n, guildId: e.guild_id, channelId: e.id });
    }, [e, t, n]);
}
function nw(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, l.jsx)("div", { className: eg()(nL.xQ, n, { [nL.oE]: i }), children: t });
}
function nF(e) {
    let { children: t, className: n } = e;
    return (0, l.jsx)("div", { className: eg()(nL.A3, n), children: t });
}
function nV(e) {
    switch (e) {
        case no.G.DELETE_USER_MESSAGE:
            return (0, l.jsx)(tg.u, { size: "xs", color: "currentColor", className: nL.yr });
        case no.G.SET_COMPLETED:
            return (0, l.jsx)(ni.A, { size: "xs", color: "currentColor", className: eg()(nL.yr, nL.r0) });
        case no.G.SUBMIT_FEEDBACK:
            return (0, l.jsx)(ns.i, { size: "xs", color: "currentColor", className: nL.yr });
        default:
            return null;
    }
}
function nB(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, c.bG)([S.default], () => S.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return nV(e);
        let s = (function (e, t, n) {
            let i = tG.Ay.getNickname(n, null, t) ?? eb.Ay.getUserTag(t),
                s = eW()(e.ts),
                l = `${i} ${s.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case no.G.DELETE_USER_MESSAGE:
                        return R.intl.formatToPlainString(R.t.BtKE9h, { userName: i, timestamp: s.fromNow() });
                    case no.G.SET_COMPLETED:
                        return R.intl.formatToPlainString(R.t.dyo9US, { userName: i, timestamp: s.fromNow() });
                    case no.G.SUBMIT_FEEDBACK:
                        return R.intl.formatToPlainString(R.t["C9/kIO"], { userName: i, timestamp: s.fromNow() });
                    default:
                        return l;
                }
            } catch (e) {
                return l;
            }
        })(t, i, n);
        return (0, l.jsx)(nn.m, { text: s, children: nV(e) });
    } catch (e) {
        return null;
    }
}
function nJ(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        i = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, l.jsx)("div", {
        className: nL.q_,
        children: i.map((e) => (0, l.jsx)(nB, { alertAction: e, guildId: n }, e.actionType)),
    });
}
let nz = a.memo(function (e) {
    let t,
        { message: n, channel: i, embedChannel: s, compact: a, interactionUserId: r } = e,
        o = nG(n, i),
        c = nH(i, n.author),
        d = (0, D.Ay)(n),
        u = (0, nI.tO)({ message: n, channel: i, author: d, guildId: i?.guild_id, compact: a, ...o }, c),
        m = S.default.getUser(r),
        x = nG(n, i),
        h = nH(i, m, S.default.getCurrentUser());
    if (null != m) {
        let e = (0, D.FT)(m, i),
            s = (0, nI.tO)({ message: n, channel: i, author: e, guildId: i?.guild_id, compact: a, ...x }, h);
        t = () => s;
    }
    return (0, l.jsx)(y.E, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: nL.he,
        children: (0, C.fu)(
            n,
            s,
            () =>
                (0, l.jsx)("div", {
                    className: nL.aT,
                    children: (0, l.jsx)(nC, { channel: s, className: nL.HA, openChatWithoutConnecting: !0 }),
                }),
            () => u,
            t,
        ),
    });
});
function nZ(e) {
    let { id: t, compact: n, message: i, channel: s } = e,
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: d },
        } = nU(!0),
        { onFocus: u, ...m } = (0, nt.rm)(t ?? ""),
        { isFocused: x, handleFocus: h, handleBlur: _ } = (0, nv.G8)(u),
        A = (0, c.bG)([U.A], () => U.A.keyboardModeEnabled),
        f = (0, c.bG)([X.A], () => X.A.can(P.xBc.MANAGE_MESSAGES, s), [s]),
        {
            ruleName: E,
            embedChannel: p,
            decisionId: I,
            keywordMatchedContent: j,
            keyword: T,
            content: v,
            flaggedMessageId: S,
            timeoutDuration: O,
            decisionReason: M,
            alertActionsExecution: L,
            quarantineType: D,
            interactionUserId: k,
        } = (0, C.Ay)(i),
        b = a.useMemo(() => (0, tH.Tz)(v, j, s.id), [v, j, s]),
        { selected: G, ...H } = nG(i, s),
        w = a.useCallback(() => {
            (0, nc.w2)(i.id, v, I, s);
        }, [i.id, v, I, s]),
        F = a.useCallback(
            (e) => {
                null != S &&
                    null != p &&
                    (e.stopPropagation(), e.preventDefault(), (0, nu.A)(P.BVt.CHANNEL(p?.guild_id, p?.id, S)));
            },
            [p, S],
        ),
        V = a.useCallback(
            (e) => {
                null != p &&
                    (g.default.selectChannel({ guildId: p.guild_id, channelId: e, messageId: i.id }), (0, nm.iN)(e));
            },
            [i, p],
        ),
        B = a.useCallback(() => {
            (0, nd.E5)(i.id, s, no.G.DELETE_USER_MESSAGE);
        }, [s, i.id]),
        J = (0, nP.getFriendlyDurationString)(Number(O)),
        z = null != M,
        Z = f && null != S && (null == L || !L.actions.hasOwnProperty(no.G.DELETE_USER_MESSAGE)),
        K = i.embeds.length > 0 ? i.embeds[0].fields.find((e) => "channel_id" === e.rawName)?.rawValue : null,
        W = null != K;
    return (0, l.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: d,
        children: (0, l.jsx)(N.A, {
            className: eg()(nL.rs, { [nL.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nD, { src: r }),
            iconContainerClassName: nL.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: eg()(nL.Qs, { [nL.oE]: n }),
                children: [
                    (0, l.jsx)(nI.ix, {
                        message: i,
                        messageClassname: nL.he,
                        className: eg()(nL.QV, nL.he, { [nL.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: nL.he,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: nL.Xh,
                                    children: R.intl.string(R.t.hG1StD),
                                }),
                                (0, l.jsx)(nr.A, { type: nb.nu.SYSTEM_DM, className: nL.Al }),
                                (0, l.jsx)(nz, {
                                    message: i,
                                    channel: s,
                                    embedChannel: p,
                                    compact: n,
                                    interactionUserId: k,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: eg()(nL.BK, { [nL.oE]: n }),
                        children: (0, l.jsx)(nj, {
                            ...m,
                            message: i,
                            channel: p,
                            content: b,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: eg()(nL.gD, {
                                [nL.oE]: n,
                                [nL.wH]: G || (A && x),
                                [nL.JD]: null != S && null != p,
                            }),
                            childrenAccessories: (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: nL.Y4,
                                        children: [
                                            null != T &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            children: R.intl.format(R.t.SYIUTR, { keyword: T }),
                                                        }),
                                                        (0, l.jsx)("div", { className: eg()(nL.Om, nL.Gx) }),
                                                    ],
                                                }),
                                            null != E &&
                                                (0, l.jsx)(y.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    tag: "span",
                                                    children: R.intl.format(R.t.ZoOyKB, { ruleName: E }),
                                                }),
                                            null != J &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsx)("div", { className: eg()(nL.Om, nL.Gx) }),
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: nL.__invalid_footerText,
                                                            children: R.intl.format(R.t["3LYql6"], { duration: J }),
                                                        }),
                                                    ],
                                                }),
                                            null != D &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsx)("div", { className: eg()(nL.Om, nL.Gx) }),
                                                        (0, l.jsx)(y.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: nL.nx,
                                                            children: R.intl.format(R.t["26bB2M"], {
                                                                reason: (0, C.o2)(D),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    z
                                        ? (0, l.jsx)(nF, {
                                              children: (0, l.jsx)(y.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  children: M,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            popoutProps: H,
                            zalgo: !0,
                            onFocus: h,
                            onBlur: _,
                            onClick: F,
                        }),
                    }),
                    (0, l.jsx)(nw, {
                        compact: n,
                        children: (0, l.jsxs)("div", {
                            className: eg()(nL.Y4, nL.UD, { [nL.oE]: n }),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: nL.AX,
                                    children: [
                                        (0, l.jsx)(nl.l, {
                                            size: "xs",
                                            color: eA.A.unsafe_rawColors.BRAND_500.css,
                                            className: nL.Dq,
                                        }),
                                        (0, l.jsx)(na.Q, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: R.intl.string(R.t.DEoVWZ),
                                            onClick: (e) => {
                                                H.onContextMenuModerateUser?.(e);
                                            },
                                        }),
                                    ],
                                }),
                                W
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", { className: nL.Om }),
                                              (0, l.jsx)("div", {
                                                  className: nL.AX,
                                                  children: (0, l.jsx)(na.Q, {
                                                      onClick: () => V(K),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: R.intl.string(R.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, l.jsx)("div", { className: nL.Om }),
                                (0, l.jsx)("div", {
                                    className: nL.AX,
                                    children: (0, l.jsx)(na.Q, {
                                        onClick: w,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: R.intl.string(R.t["94JbM3"]),
                                    }),
                                }),
                                Z
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", { className: nL.Om }),
                                              (0, l.jsx)("div", {
                                                  className: nL.AX,
                                                  children: (0, l.jsx)(na.Q, {
                                                      onClick: B,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: R.intl.string(R.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != L ? (0, l.jsx)(nJ, { alertActionsExecution: L, guildId: s.guild_id }) : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
var nK = n(718564),
    nX = (((i = {}).JOIN_RAID = "JOIN_RAID"), (i.DM_RAID = "DM_RAID"), (i.MENTION_RAID = "MENTION_RAID"), i),
    nW = n(695366),
    nQ = n(848847),
    nY = n(939249),
    nq = n(953822),
    n$ = n(585510),
    n0 = n(903093),
    n1 = n(601623),
    n2 = n(854627),
    n3 = n(393239);
function n7() {
    return (0, l.jsx)("div", { className: n3.Om });
}
function n6(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, C.Bk)(t);
    switch (i) {
        case C.ZA:
        case nK.W.RAID:
            return (0, l.jsx)(n8, { message: t, compact: n });
        case nK.W.MENTION_RAID:
            return (0, l.jsx)(ie, { message: t, compact: n });
        case nK.W.ACTIVITY_ALERTS_ENABLED:
            return (0, l.jsx)(n4, { message: t, compact: n });
        case nK.W.INTERACTION_BLOCKED:
            return (0, l.jsx)(n5, { compact: n });
        default:
            return (0, l.jsx)(n9, { compact: n });
    }
}
function n9(e) {
    let { compact: t } = e;
    return (0, l.jsx)(it, {
        compact: t,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(nW.E, { size: "xs", color: eA.A.colors.TEXT_DEFAULT.css }),
                (0, l.jsx)(y.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: R.intl.string(R.t.VdZCcC),
                }),
            ],
        }),
        content: (0, l.jsx)(y.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(R.t["NxHYX/"]),
        }),
    });
}
function n5(e) {
    let { compact: t } = e;
    return (0, l.jsx)(it, {
        compact: t,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(nW.E, { size: "xs", color: eA.A.colors.TEXT_DEFAULT.css }),
                (0, l.jsx)(y.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: R.intl.string(R.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, l.jsx)(y.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(R.t.Dc9wCp),
        }),
    });
}
function n4(e) {
    let { message: t, compact: n } = e,
        i = S.default.getUser((0, C.ZD)(t)),
        s = tD.A.getBasicChannel(t.channel_id)?.guild_id,
        r = null != s && null != i ? v.Ay.getMember(s, i.id) : null,
        { avatarSrc: o, avatarDecorationSrc: c, eventHandlers: d } = (0, n2.A)({ userId: i?.id, guildId: s, size: 12 }),
        u = a.useRef(null);
    return (0, l.jsx)(it, {
        compact: n,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(nQ.H, { size: "xs", color: eA.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                (0, l.jsx)(y.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: R.intl.string(R.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, l.jsxs)("div", {
            className: n3.Ns,
            children: [
                (0, l.jsx)("div", {
                    className: n3.gk,
                    children:
                        null != r &&
                        null != i &&
                        (0, l.jsxs)(a.Fragment, {
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: R.intl.string(R.t.qlFrXW),
                                }),
                                (0, l.jsx)(tr.A, {
                                    targetElementRef: u,
                                    user: i,
                                    guildId: s,
                                    channelId: t.channel_id,
                                    messageId: t.id,
                                    children: (e) =>
                                        (0, l.jsxs)(nY.D, {
                                            innerRef: u,
                                            className: n3.rI,
                                            ...e,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    ...d,
                                                    children: (0, l.jsx)(nO.eu, {
                                                        src: o,
                                                        avatarDecoration: c,
                                                        size: tV._3.SIZE_16,
                                                        "aria-label": "TODO",
                                                    }),
                                                }),
                                                (0, l.jsxs)(y.E, {
                                                    variant: "text-xs/medium",
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
                (0, l.jsx)(n7, {}),
                (0, l.jsx)(y.E, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: eW()(t.timestamp).fromNow(),
                }),
            ],
        }),
        content: (0, l.jsx)(y.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(R.t["QV/8u5"]),
        }),
    });
}
function n8(e) {
    let { message: t, compact: n } = e,
        { joinAttempts: i, raidDatetime: s, dmsSent: r, raidType: o, resolvedReason: d } = (0, C.Bk)(t),
        u = (0, c.bG)([tD.A], () => tD.A.getChannel(t.channel_id), [t.channel_id]),
        m = u?.guild_id ?? null,
        { shouldShowIncidentActions: x } = (0, n$.Li)(m),
        h = (0, nv.Am)(t.author.id, t.channel_id),
        g = a.useCallback(() => {
            let e = u?.guild_id;
            null != e && (0, nc.is)(t.id, e);
        }, [t.id, u]),
        _ = o === nX.DM_RAID,
        A = _ ? nW.E : nq.E;
    return (0, l.jsx)(it, {
        compact: n,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(A, { size: "xs", color: eA.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, l.jsx)(y.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: _ ? R.intl.string(R.t["8+lHUb"]) : R.intl.string(R.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, l.jsxs)("div", {
            className: n3.Ns,
            children: [
                null != i &&
                    (0, l.jsx)(y.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: R.intl.format(R.t["4ylIiu"], { joinCount: i }),
                    }),
                null != r &&
                    (0, l.jsx)(y.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: R.intl.format(R.t["5C8Mh3"], { dmsSent: r }),
                    }),
                null != s &&
                    (0, l.jsxs)(a.Fragment, {
                        children: [
                            (0, l.jsx)(n7, {}),
                            (0, l.jsx)(y.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eW()(s).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != s
                ? (0, l.jsx)(y.E, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: R.intl.format(R.t["4QIIZl"], {
                          dateTime: s.toLocaleString(R.intl.currentLocale, n0.yc),
                      }),
                  })
                : null,
        footerButtons: x
            ? (0, l.jsxs)("div", {
                  className: n3.OZ,
                  children: [
                      (0, l.jsxs)("div", {
                          className: n3.AX,
                          children: [
                              (0, l.jsx)(nl.l, {
                                  size: "xs",
                                  color: eA.A.unsafe_rawColors.BRAND_500.css,
                                  className: n3.Dq,
                              }),
                              (0, l.jsx)(na.Q, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: R.intl.string(R.t.DEoVWZ),
                                  onClick: (e) => {
                                      h(e);
                                  },
                              }),
                          ],
                      }),
                      (0, l.jsx)(n7, {}),
                      (0, l.jsx)("div", {
                          className: n3.AX,
                          children: (0, l.jsx)(na.Q, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, C.Oj)(d),
                              onClick: g,
                          }),
                      }),
                  ],
              })
            : null,
    });
}
function ie(e) {
    let { message: t, compact: n } = e,
        i = tD.A.getBasicChannel(t.channel_id)?.guild_id,
        { raidDatetime: s, decisionId: r, suspiciousMentionActivityUntil: o } = (0, C.Bk)(t);
    return (0, l.jsx)(it, {
        compact: n,
        header: (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(nW.E, { size: "xs", color: eA.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, l.jsx)(y.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: R.intl.string(R.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, l.jsx)("div", {
            className: n3.Ns,
            children:
                null != s &&
                (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-default", children: eW()(s).fromNow() }),
        }),
        content: (0, l.jsx)(y.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(R.t.SWIWEV),
        }),
        footerButtons: (0, l.jsxs)("div", {
            className: n3.OZ,
            children: [
                (0, l.jsx)("div", {
                    className: n3.AX,
                    children: (0, l.jsx)(na.Q, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: R.intl.string(R.t.oX14El),
                        onClick: function () {
                            null != i &&
                                null != r &&
                                (0, nd.W5)(i, r, () => {
                                    (0, n1.w)(o), (0, nd.wu)(i);
                                });
                        },
                    }),
                }),
                (0, l.jsx)(n7, {}),
                (0, l.jsx)("div", {
                    className: n3.AX,
                    children: (0, l.jsx)(na.Q, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: R.intl.string(R.t["1R7QIx"]),
                        onClick: function () {
                            null != i && ex.A.open(i, P.BEX.GUILD_AUTOMOD, void 0, P.nd0.AUTOMOD_MENTION_SPAM);
                        },
                    }),
                }),
            ],
        }),
    });
}
function it(e) {
    let { compact: t, header: n, subheader: i, content: s, footerButtons: a } = e;
    return (0, l.jsxs)("div", {
        className: eg()(n3.gD, { [n3.oE]: t }),
        children: [
            (0, l.jsxs)("div", {
                className: n3.Ux,
                children: [
                    (0, l.jsxs)("div", {
                        className: n3.LN,
                        children: [
                            (0, l.jsx)("div", { className: n3.MY, children: n }),
                            null != i && (0, l.jsx)("div", { className: n3.m_, children: i }),
                        ],
                    }),
                    s,
                ],
            }),
            null != a && (0, l.jsx)("div", { className: eg()(n3.Y4, n3.UX, { [n3.oE]: t }), children: a }),
        ],
    });
}
function ii(e) {
    let { id: t, compact: n, message: i, channel: s } = e,
        {
            avatarSrc: a,
            eventHandlers: { onMouseEnter: r, onMouseLeave: o },
        } = nU(!0),
        { notificationType: c } = (0, C.Bk)(i),
        d = null == c || c === nK.W.RAID;
    return (0, l.jsx)("div", {
        onMouseEnter: r,
        onMouseLeave: o,
        children: (0, l.jsx)(N.A, {
            className: eg()(n3.rs, { [n3.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nD, { src: a }),
            iconContainerClassName: n3.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: eg()(n3.Qs, { [n3.oE]: n }),
                children: [
                    (0, l.jsx)(nI.ix, {
                        message: i,
                        messageClassname: n3.he,
                        className: eg()(n3.QV, n3.he, { [n3.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: n3.he,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: n3.Xh,
                                    children: R.intl.string(R.t.hG1StD),
                                }),
                                (0, l.jsx)(nr.A, { type: nb.nu.SYSTEM_DM, className: n3.Al }),
                                d &&
                                    (0, l.jsx)(y.E, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: n3.he,
                                        children: R.intl.string(R.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", { className: n3.BZ }),
                    (0, l.jsx)(n6, { message: i, compact: n }),
                ],
            }),
        }),
    });
}
function is(e) {
    let { message: t, ...n } = e;
    return (0, C.de)(t) ? (0, l.jsx)(ii, { message: t, ...n }) : (0, l.jsx)(nZ, { message: t, ...n });
}
var il = n(480012);
function ia(e) {
    let { message: t, compact: i, missed: s, joinable: a, usernameHook: r, onClickJoinCall: o } = e,
        c = (0, D.Ay)(t),
        d = c.nick,
        u = r(c),
        m = (0, il.A)(t);
    return s
        ? (0, l.jsx)(N.A, {
              icon: n(130158),
              timestamp: t.timestamp,
              compact: i,
              children:
                  null != m
                      ? R.intl.format(R.t.AcqBmO, { username: d, usernameHook: u, callDuration: m })
                      : R.intl.format(R.t["43phHx"], { username: d, usernameHook: u }),
          })
        : (0, l.jsxs)(N.A, {
              icon: n(175476),
              timestamp: t.timestamp,
              compact: i,
              children: [
                  null != m
                      ? R.intl.format(R.t["7TeC1P"], { username: d, usernameHook: u, callDuration: m })
                      : R.intl.format(R.t.LuB5RD, { username: d, usernameHook: u }),
                  a ? (0, l.jsx)(N.A.Action, { onClick: o, children: R.intl.string(R.t.oa9mvZ) }) : null,
              ],
          });
}
var ir = n(517905);
function io(e) {
    let { children: t, messageReference: n, guildName: i } = e,
        s = a.useRef(null);
    if (null == n) return (0, l.jsx)(ta.Anchor, { children: t });
    let { guild_id: r } = n;
    return null == r
        ? (0, l.jsx)(ta.Anchor, { children: t })
        : (0, l.jsx)(ir.A, {
              guildId: r,
              name: i,
              targetElementRef: s,
              children: (e) => {
                  let { "aria-controls": n, "aria-expanded": i, ...a } = e;
                  return (0, l.jsx)(ta.Anchor, { ...a, ref: s, children: t });
              },
          });
}
function ic(e) {
    let { usernameHook: t, message: i, compact: s } = e,
        { content: a, timestamp: r, messageReference: o } = i,
        c = (0, D.Ay)(i),
        d = t(c),
        u = (a ?? "").split(" ").slice(0, -1).join(" "),
        m = R.intl.format(R.t["47CZc2"], {
            username: c.nick,
            usernameHook: d,
            webhookName: a,
            webhookNameHook: (e, t) => (0, l.jsx)(io, { messageReference: o, guildName: u, children: e }, t),
        });
    return (0, l.jsx)(N.A, { icon: n(617184), timestamp: r, compact: s, children: m });
}
var id = n(22231),
    iu = n(73028);
function im(e) {
    let { message: t, usernameHook: n, compact: i } = e,
        s = (0, D.Ay)(t),
        a = n(s);
    return (0, l.jsx)(N.A, {
        iconNode: (0, l.jsx)(id.R, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: i,
        children: R.intl.format(R.t["4wLp25"], {
            username: s.nick,
            usernameHook: a,
            editGroupButton: (0, l.jsx)(
                y.E,
                { tag: "span", variant: "text-md/medium", color: "text-link", children: R.intl.string(R.t["5Q9+/L"]) },
                `edit-group-button-${t.id}`,
            ),
            onEditGroup: () => (0, iu.U)(t.channel_id, F.A.GROUP_DM_SYSTEM_MESSAGE_ICON),
        }),
    });
}
var ix = n(663417),
    ih = n(429913),
    ig = n(111417);
function i_(e) {
    let { message: t, channel: n, compact: i } = e,
        s = (0, D.Ay)(t),
        a = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id })(s),
        r = (0, ih.h)(t.applicationId);
    if (null == r) return null;
    let o = R.intl.format(R.t.mAtJTC, {
        username: t.author.username,
        usernameHook: a,
        applicationName: r.name,
        applicationNameHook: () =>
            (0, l.jsx)(
                y.E,
                { className: ig.S, variant: "text-md/semibold", color: "text-strong", children: r.name },
                r.name,
            ),
        helpdeskArticle: "#",
    });
    return (0, l.jsx)(N.A, {
        iconNode: (0, l.jsx)(ix.f, { size: "sm", color: eA.A.colors.STATUS_POSITIVE }),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: ig.H,
        children: o,
    });
}
function iA(e) {
    let { message: t, usernameHook: n, compact: i, isForumPost: s } = e,
        a = (0, D.Ay)(t),
        r = n(a),
        o = (0, c.bG)([tD.A], () => tD.A.getChannel(t.channel_id)?.isGroupDM() ?? !1);
    return (0, l.jsx)(N.A, {
        compact: i,
        iconNode: (0, l.jsx)(id.R, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        children: o
            ? R.intl.format("" === t.content ? R.t.AI1ZZr : R.t.geP3rU, {
                  username: a.nick,
                  usernameHook: r,
                  channelName: (0, l.jsx)(
                      y.E,
                      { tag: "span", variant: "text-md/medium", color: "text-strong", children: t.content },
                      `group-name-${t.id}`,
                  ),
                  editGroupButton: (0, l.jsx)(
                      y.E,
                      {
                          tag: "span",
                          variant: "text-md/medium",
                          color: "text-link",
                          children: R.intl.string(R.t["5Q9+/L"]),
                      },
                      `edit-group-button-${t.id}`,
                  ),
                  onEditGroup: () => (0, iu.U)(t.channel_id, F.A.GROUP_DM_SYSTEM_MESSAGE_NAME),
              })
            : R.intl.format(s ? R.t.SOQ4hJ : R.t.oItgEw, { username: a.nick, usernameHook: r, channelName: t.content }),
    });
}
var iE = n(366605);
function iC(e) {
    let { message: t, usernameHook: n, onClickPins: i, compact: s } = e,
        a = (0, D.Ay)(t),
        r = a.nick,
        o = n(a),
        c = () => {
            if (null == t.messageReference) return;
            let { channel_id: e, message_id: n } = t.messageReference;
            h.A.jumpToMessage({ channelId: e, messageId: n, flash: !0 });
        },
        d = { iconNode: (0, l.jsx)(iE.t, { size: "sm", color: "currentColor" }) };
    return (0, l.jsx)(N.A, {
        ...d,
        timestamp: t.timestamp,
        compact: s,
        children:
            null != t.messageReference
                ? null == i
                    ? R.intl.format(R.t.lD5tup, { usernameHook: o, username: r, messageOnClick: c })
                    : R.intl.format(R.t.yIDvPL, {
                          usernameHook: o,
                          username: r,
                          pinsActionOnClick: i,
                          messageOnClick: c,
                      })
                : null == i
                  ? R.intl.format(R.t.vfkjqx, { usernameHook: o, username: r })
                  : R.intl.format(R.t.R7vZGZ, { usernameHook: o, username: r, pinsActionOnClick: i }),
    });
}
var ip = n(497767),
    iI = n(179250);
function iN(e) {
    let t,
        { message: n, channel: i, compact: s } = e,
        a = n.getChannelId(),
        r = i.isDM() ? i.getRecipientId() : void 0,
        o = (0, c.bG)([S.default], () => (null != r ? S.default.getUser(r) : void 0), [r]),
        d = (0, c.bG)([S.default], () => S.default.getCurrentUser(), []),
        u = null != d && n.author.id === d.id,
        m = (0, D.d8)(o, i),
        x = (0, I.P)({ user: o, channelId: a, guildId: void 0, messageId: n.id })(m);
    if (!i.isDM() || null == o || null == d) return null;
    let h = { username: m.nick, usernameHook: x },
        g = n.content;
    if (null != g && "" !== g) {
        let e = (0, l.jsx)(
            y.E,
            { tag: "span", variant: "text-md/medium", color: "text-strong", children: g },
            `note-${n.id}`,
        );
        t = u ? R.intl.format(R.t.IquUXd, { ...h, note: e }) : R.intl.format(R.t.ZOZy2q, { ...h, note: e });
    } else t = u ? R.intl.format(R.t.S6PRsh, h) : R.intl.format(R.t["H/9Tlj"], h);
    return (0, l.jsx)(N.A, {
        iconNode: (0, l.jsx)(ip.V, { size: "sm", color: eA.A.colors.STATUS_POSITIVE }),
        iconContainerClassName: iI.z,
        timestamp: n.timestamp,
        compact: s,
        children: t,
    });
}
function ij(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, D.Ay)(t),
        a = i(s),
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c },
        } = nU(!0),
        d =
            "" !== t.content
                ? new Date(t.content).toLocaleString(R.intl.currentLocale, {
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
        children: (0, l.jsx)(N.A, {
            className: eg()(n3.rs, { [n3.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nD, { src: r }),
            iconContainerClassName: n3.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: eg()(n3.Qs, { [n3.oE]: n }),
                children: [
                    (0, l.jsx)(nI.ix, {
                        message: t,
                        messageClassname: n3.he,
                        className: eg()(n3.QV, n3.he, { [n3.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: n3.he,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: n3.Xh,
                                    children: R.intl.string(R.t.hG1StD),
                                }),
                                (0, l.jsx)(nr.A, { type: nb.nu.SYSTEM_DM, className: n3.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: eg()(n3.__invalid_messageContent, { [n3.oE]: n }),
                        children:
                            t.type === P.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? R.intl.format(R.t["+m8eD7"], { username: s.nick, usernameHook: a, time: d })
                                : R.intl.format(R.t["BHeke+"], { username: s.nick, usernameHook: a }),
                    }),
                ],
            }),
        }),
    });
}
var iT = n(554146),
    iv = n(367727),
    iS = n(104510),
    iO = n(987144);
function iR(e) {
    let { guild: t, analyticsLocation: n, analyticsLocations: i, closeLayer: s, variant: r = "expressive" } = e,
        [o, d] = a.useState(!1),
        { analyticsLocations: m } = (0, V.Ay)(i ?? []),
        x = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        h = x?.isPremiumGroupMember();
    async function g() {
        d(!0),
            await (0, iO.g)({
                analyticsLocations: m,
                analyticsLocation: { object: P.ZSU.BUTTON_CTA, objectType: P.AnalyticsObjectTypes.BUY, ...n },
                guild: t,
                closeLayer: s,
                onClose: () => {
                    d(!1);
                },
            });
    }
    return (0, l.jsx)(u.$, {
        variant: r,
        size: "md",
        icon: iS._,
        text: R.intl.string(R.t.gKmQ1G),
        onClick: g,
        loading: o,
        disabled: h,
    });
}
var iM = n(363487),
    iL = n(828162),
    iy = n(49999),
    iU = n(853513),
    iD = n(829687);
let ik =
        "https://cdn.discordapp.com/assets/content/d13cdfe882b0acba4f7752d488ba86dc628364d43eb3be876c8bb6f0bc80a240.png",
    ib =
        "https://cdn.discordapp.com/assets/content/424bcefb880eff14d647b0467cf446e83c27321af508a2e0a5f707d80c42e58b.png";
function iP(e) {
    let { title: t, body: n, guild: i, analyticsLocations: s } = e,
        a = (0, c.bG)([U.A], () => U.A.useReducedMotion);
    return (0, l.jsxs)("div", {
        className: iD.kL,
        children: [
            (0, l.jsx)("div", {
                className: iD.ZS,
                children: (0, l.jsx)("img", { className: iD.Sl, src: a ? ib : ik, alt: "Boost gem" }),
            }),
            (0, l.jsxs)("div", {
                className: iD.Qs,
                children: [
                    (0, l.jsx)(eq.D, {
                        variant: "heading-md/semibold",
                        style: { marginTop: 0, marginBottom: "var(--space-4)" },
                        children: t,
                    }),
                    (0, l.jsx)(y.E, { color: "text-muted", className: iD.rf, variant: "text-sm/medium", children: n }),
                ],
            }),
            (0, l.jsx)("div", {
                children: (0, l.jsx)(iR, {
                    guild: i,
                    analyticsLocations: s,
                    analyticsLocation: { page: P.liQ.GUILD_CHANNEL, section: P.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function iG(e) {
    let { guild: t } = e;
    a.useEffect(() => {
        (0, iv.uh)(iT.M.FIRST_BOOSTER_UPSELL_OVERSEER, { dismissAction: iy.i.AUTO_DISMISS, guildId: t.id });
    }, [t.id]);
    let n = (0, iM.A)(t.id);
    return (0, l.jsx)(iP, {
        title: R.intl.string(iU.default.qGDEON),
        body: R.intl.format(iU.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, l.jsx)(nY.D, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        n
                            ? (0, iL.A)(t.id, F.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL)
                            : (0, p.K4)({
                                  guildId: t.id,
                                  location: {
                                      section: P.JJy.CHANNEL_TEXT_AREA,
                                      object: P.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                                  },
                              });
                    },
                    children: e,
                }),
        }),
        guild: t,
        analyticsLocations: [F.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL],
    });
}
function iH(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === A.Mk.FIRST_BOOSTER ? (0, l.jsx)(iG, { guild: n }) : null;
}
function iw(e) {
    let { boostingPrompt: t, channel: n } = e,
        i = n.guild_id,
        s = (0, c.bG)([en.A], () => en.A.getGuild(i), [i]);
    return null == s
        ? null
        : (0, l.jsx)(N.A, {
              contentClassName: iD.FG,
              iconContainerClassName: iD.zc,
              iconNode: (0, l.jsx)(tw.X, { colorClass: iD.Kk }),
              children: (0, l.jsx)(iH, { boostingPrompt: t, guild: s }),
          });
}
var iF = n(123030);
function iV(e) {
    let { message: t, compact: i, onClick: s } = e;
    return (0, l.jsx)(N.A, {
        icon: n(290388),
        timestamp: t.timestamp,
        compact: i,
        contentClassName: iF.B,
        children: R.intl.format(R.t.bYdG3f, { onClick: s }),
    });
}
function iB(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, D.Ay)(t),
        a = i(s),
        {
            avatarSrc: r,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c },
        } = nU(!0);
    return (0, l.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, l.jsx)(N.A, {
            className: eg()(n3.rs, { [n3.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nD, { src: r }),
            iconContainerClassName: n3.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: eg()(n3.Qs, { [n3.oE]: n }),
                children: [
                    (0, l.jsx)(nI.ix, {
                        message: t,
                        messageClassname: n3.he,
                        className: eg()(n3.QV, n3.he, { [n3.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: n3.he,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: n3.Xh,
                                    children: R.intl.string(R.t.hG1StD),
                                }),
                                (0, l.jsx)(nr.A, { type: nb.nu.SYSTEM_DM, className: n3.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: eg()(n3.__invalid_messageContent, { [n3.oE]: n }),
                        children: R.intl.format(R.t.qntXNQ, { username: s.nick, usernameHook: a }),
                    }),
                ],
            }),
        }),
    });
}
function iJ(e) {
    let { message: t, compact: n, usernameHook: i, channel: s } = e,
        a = (0, c.bG)([en.A], () => en.A.getGuild(s.guild_id)),
        r = (0, D.Ay)(t),
        o = i(r),
        {
            avatarSrc: d,
            eventHandlers: { onMouseEnter: u, onMouseLeave: m },
        } = nU(!0);
    return (0, l.jsx)("div", {
        onMouseEnter: u,
        onMouseLeave: m,
        children: (0, l.jsx)(N.A, {
            className: eg()(n3.rs, { [n3.oE]: n }),
            iconNode: n ? null : (0, l.jsx)(nD, { src: d }),
            iconContainerClassName: n3.zc,
            compact: n,
            children: (0, l.jsxs)("div", {
                className: eg()(n3.Qs, { [n3.oE]: n }),
                children: [
                    (0, l.jsx)(nI.ix, {
                        message: t,
                        messageClassname: n3.he,
                        className: eg()(n3.QV, n3.he, { [n3.oE]: n }),
                        username: (0, l.jsxs)("div", {
                            className: n3.he,
                            children: [
                                (0, l.jsx)(y.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: n3.Xh,
                                    children: R.intl.string(R.t.hG1StD),
                                }),
                                (0, l.jsx)(nr.A, { type: nb.nu.SYSTEM_DM, className: n3.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: eg()(n3.__invalid_messageContent, { [n3.oE]: n }),
                        children: R.intl.format(R.t.W0UBI3, {
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
var iz = n(959988),
    iZ = n(402216);
function iK(e) {
    let { message: t, channel: n, playingActivity: i, onJoinStream: s, usernameHook: a, compact: r } = e,
        o = (0, D.Ay)(t),
        c = (0, ng.Ay)(n),
        d = t.call?.duration,
        u = a(o),
        m = R.intl.format(R.t.FKXvaI, {
            username: o.nick,
            activityName: null != i ? i.name : "unknown",
            onJoinStream: s,
            usernameHook: u,
        });
    return (
        null != d &&
            (m = R.intl.format(R.t.NEFxtd, {
                username: o.nick,
                duration: d.humanize(),
                channelName: c ?? "",
                usernameHook: u,
            })),
        (0, l.jsx)(N.A, {
            iconNode:
                null != d
                    ? (0, l.jsx)(iz.G, { size: "custom", color: "currentColor", width: 20, height: 20 })
                    : (0, l.jsx)(iZ.Ay, { size: iZ.Ay.Sizes.SMALL }),
            timestamp: t.timestamp,
            compact: r,
            children: m,
        })
    );
}
var iX = n(687966),
    iW = n(137177),
    iQ = n(479978);
function iY(e) {
    let { message: t, channel: n, author: i, compact: s } = e,
        { nick: a } = (0, D.d8)(i, n),
        r = (0, I.P)({ user: i, channelId: n.id, guildId: void 0, messageId: void 0 })(),
        o = (0, ih.h)(t.applicationId);
    if (null == o) return null;
    let c = R.intl.format(R.t.m7Lwas, {
        username: a,
        usernameHook: r,
        gameName: o.name,
        gameIconHook: (e) =>
            (0, l.jsxs)("span", {
                className: iQ.Y_,
                children: [(0, l.jsx)(iW.A, { game: o, size: iW.M.XXSMALL, className: iQ.p4 }), " ", e],
            }),
        helpdeskArticle: e1.A.getArticleURL(P.MVz.SOCIAL_LAYER_CONNECTIONS),
    });
    return (0, l.jsx)(N.A, {
        iconNode: (0, l.jsx)(iX._, { size: "sm" }),
        compact: s,
        contentClassName: iQ.Qs,
        children: (0, l.jsx)("div", { children: c }),
    });
}
function iq(e) {
    let { message: t, otherUsername: i, usernameHook: s, otherUsernameHook: a, compact: r } = e,
        { nick: o } = (0, D.Ay)(t),
        c = s(),
        d = a(),
        u = R.intl.format(R.t.MMN2Jq, { username: o, usernameHook: c, otherUsername: i, otherUsernameHook: d });
    return (0, l.jsx)(N.A, { icon: n(617184), timestamp: t.timestamp, compact: r, children: u });
}
function i$(e) {
    let t,
        { message: i, usernameHook: s, otherUser: a, otherUsernameHook: r, compact: o, channel: c } = e,
        d = (0, D.Ay)(i),
        u = d.nick,
        m = s(d),
        x = (0, D.d8)(a, c);
    if (null != x && null != r) {
        let e = r(x);
        t = R.intl.format(R.t.L2FyVq, { username: u, usernameHook: m, otherUsername: x.nick, otherUsernameHook: e });
    } else t = R.intl.format(R.t["5v2xa8"], { username: u, usernameHook: m });
    return (0, l.jsx)(N.A, { icon: n(884797), timestamp: i.timestamp, compact: o, children: t });
}
var i0 = n(451394),
    i1 = n(554655);
function i2(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, D.Ay)(t),
        a = i(s),
        r = R.intl.format(R.t["zla/ux"], { username: s.nick, usernameHook: a, topic: t.content });
    return (0, l.jsx)(N.A, {
        className: i1.d,
        iconNode: (0, l.jsx)(i0.q, { size: "md", color: "currentColor" }),
        iconContainerClassName: i1.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
var i3 = n(297152);
function i7(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, D.Ay)(t),
        a = i(s),
        r = R.intl.format(R.t.tv2DNy, { username: s.nick, usernameHook: a });
    return (0, l.jsx)(N.A, {
        className: i1.d,
        iconNode: (0, l.jsx)(i3.E, { size: "md", color: "currentColor" }),
        iconContainerClassName: i1.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function i6(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, D.Ay)(t),
        a = i(s),
        r = R.intl.format(R.t["dKW5C+"], { username: s.nick, usernameHook: a });
    return (0, l.jsx)(N.A, {
        className: i1.d,
        iconNode: (0, l.jsx)(m.L, { size: "md", color: "currentColor" }),
        iconContainerClassName: i1.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function i9(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, D.Ay)(t),
        a = i(s),
        r = R.intl.format(R.t["Rv+TSM"], { username: s.nick, usernameHook: a, topic: t.content });
    return (0, l.jsx)(N.A, {
        className: i1.d,
        iconNode: (0, l.jsx)(i0.q, { size: "md", color: eA.A.unsafe_rawColors.GREEN_360.css }),
        iconContainerClassName: i1.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
function i5(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        s = (0, D.Ay)(t),
        a = i(s),
        r = R.intl.format(R.t.Yy6vLs, { username: s.nick, usernameHook: a, topic: t.content });
    return (0, l.jsx)(N.A, {
        className: i1.d,
        iconNode: (0, l.jsx)(i0.q, { size: "md", color: "currentColor" }),
        iconContainerClassName: i1.z,
        timestamp: t.timestamp,
        compact: n,
        children: r,
    });
}
var i4 = n(163328),
    i8 = n(871073);
function se(e) {
    let {
            message: t,
            compact: n,
            usernameHook: i,
            onClickThread: s,
            onClickViewThreads: a,
            onContextMenuThread: r,
        } = e,
        o = (0, D.Ay)(t),
        d = i(o),
        u = (0, c.bG)([tD.A], () => tD.A.getChannel(t.messageReference?.channel_id)),
        m = (0, ng.Ay)(u),
        x = R.intl.format(R.t.cZ9Uf2, {
            actorName: o.nick,
            actorHook: d,
            threadName: m ?? t.content,
            threadOnClick: { onClick: s, onContextMenu: r },
            viewThreadsOnClick: a,
        });
    return (0, l.jsx)(N.A, {
        iconNode: (0, l.jsx)(i4.y, { size: "md", color: "currentColor", className: i8.K }),
        timestamp: t.timestamp,
        compact: n,
        children: x,
    });
}
function st(e) {
    let { message: t, channel: i, targetUser: s, actorUsernameHook: a, targetUsernameHook: r, compact: o } = e,
        c = (0, D.Ay)(t),
        d = (0, D.d8)(s, i),
        u = a(c),
        m = r(d ?? void 0),
        x = R.intl.format(R.t.tusv2h, { actorName: c.nick, actorHook: u, targetName: d?.nick, targetHook: m });
    return (0, l.jsx)(N.A, { icon: n(617184), timestamp: t.timestamp, compact: o, children: x });
}
function sn(e) {
    let { message: t, channel: i, targetUser: s, actorUsernameHook: a, targetUsernameHook: r, compact: o } = e,
        c = (0, D.Ay)(t),
        d = (0, D.d8)(s, i),
        u = a(c),
        m = r(d ?? void 0),
        x = R.intl.format(R.t["32QI5/"], { actorName: c.nick, actorHook: u, targetName: d?.nick, targetHook: m });
    return (0, l.jsx)(N.A, { icon: n(884797), timestamp: t.timestamp, compact: o, children: x });
}
var si = n(627827),
    ss = n(861464);
function sl(e) {
    let { message: t, usernameHook: i, compact: s } = e,
        a = (0, D.Ay)(t),
        r = i(a),
        o = ss.A.getSystemMessageUserJoin(t.id),
        c = R.intl.format(o, { username: a.nick, usernameHook: r });
    return (0, l.jsx)(N.A, { icon: n(617184), timestamp: t.timestamp, compact: s, children: c });
}
var sa = n(106778),
    sr = n(835245),
    so = n(319060),
    sc = n(544048),
    sd = n(844222),
    su = n(21161);
let sm = (0, n(945810).mj)({
    name: "2026-03-new-server-boost-system-messages",
    kind: "user",
    defaultConfig: { enabled: !1, showCta: !0 },
    variations: { 1: { enabled: !0, showCta: !0 }, 2: { enabled: !0, showCta: !1 } },
});
var sx = n(513609),
    sh = n(512599);
function sg(e) {
    let t = Number(e.content);
    return isNaN(t) || 0 === t ? 1 : t;
}
var s_ = n(780964),
    sA = n(766075),
    sf = n(473145),
    sE = n(473193),
    sC = n(448643);
function sp(e) {
    let t = (0, iM.A)(e);
    return a.useCallback(() => {
        null != e &&
            (t
                ? (0, iL.A)(e, F.A.GUILD_BOOSTING_SYSTEM_MESSAGE)
                : (0, p.K4)({
                      guildId: e,
                      location: { section: P.JJy.CHANNEL_TEXT_AREA, object: P.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                  }));
    }, [e, t]);
}
function sI(e) {
    let { className: t, animate: n } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)("img", { className: sC.fj, src: n ? ik : ib, alt: "", "aria-hidden": !0 }),
    });
}
function sN(e) {
    let { title: t, body: n } = e;
    return (0, l.jsxs)("div", {
        className: sC.Qs,
        children: [
            (0, l.jsx)(y.E, { variant: "text-md/semibold", scaleFontToUserSetting: !0, className: sC.DD, children: t }),
            (0, l.jsx)(y.E, { variant: "text-sm/medium", scaleFontToUserSetting: !0, className: sC.rf, children: n }),
        ],
    });
}
function sj(e) {
    let { guild: t, firstBooster: n } = e;
    return (0, l.jsx)("div", {
        className: sC.o1,
        children: (0, l.jsx)(iR, {
            guild: t,
            variant: "secondary",
            analyticsLocation: {
                page: P.liQ.GUILD_CHANNEL,
                section: P.JJy.CHANNEL_TEXT_AREA,
                object: P.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
            },
            analyticsLocations: [
                n
                    ? F.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE_FIRST_TIME_BOOSTER
                    : F.A.GUILD_BOOSTING_ANNOUNCEMENT_MESSAGE,
            ],
        }),
    });
}
function sT(e) {
    let { guild: t, children: n } = e,
        i = sp(t?.id);
    return (0, l.jsx)(nY.D, { tag: "a", role: "link", className: sC.oT, onClick: i, children: n });
}
function sv(e) {
    let t,
        n,
        { message: i, guild: s, usernameHook: a, showCta: o } = e,
        d = ((t = (0, c.bG)([U.A], () => U.A.useReducedMotion)), (n = r.useContext(sE.C)?.animate ?? !1), !t && n),
        u = (0, D.Ay)(i),
        m = a(u),
        x = i.hasFlag(P.pr7.IS_FIRST_BOOSTER),
        h = sp(s?.id),
        g = x
            ? R.intl.format(R.t["/1IQGD"], { username: u.nick, usernameHook: m })
            : R.intl.format(R.t.SbSWvY, { username: u.nick, usernameHook: m, numSubscriptions: sg(i) }),
        _ = o
            ? R.intl.format(R.t.dWm8Iu, { learnMoreHook: (e) => (0, l.jsx)(sT, { guild: s, children: e }) })
            : R.intl.string(R.t["0Mdw0t"]),
        A = (0, l.jsxs)("div", {
            className: sC.kL,
            children: [
                (0, l.jsx)(sI, { className: sC.rc, animate: d }),
                (0, l.jsx)(sN, { title: g, body: _ }),
                o && null != s && (0, l.jsx)(sj, { guild: s, firstBooster: x }),
            ],
        }),
        f = (0, l.jsx)(iS._, { className: sC.Kk });
    return (0, l.jsx)(N.A, {
        contentClassName: sC.$O,
        iconNode: f,
        iconContainerClassName: sC.zc,
        children: o ? A : (0, l.jsx)(nY.D, { className: sC.w8, onClick: h, children: A }),
    });
}
var sS = n(746979);
let sO = {
    enter: { BEG: 0, END: 22 },
    confetti: { BEG: 23, END: 119 },
    leaf_peel: { BEG: 120, END: 160 },
    leaf_fall: { BEG: 161, END: 163 },
    exit: { BEG: 164, END: 200 },
};
var sR =
    (((s = {}).TOP_LEFT = "TOP_LEFT"),
    (s.TOP_RIGHT = "TOP_RIGHT"),
    (s.BOTTOM_LEFT = "BOTTOM_LEFT"),
    (s.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
    s);
let sM = ["TOP_LEFT", "TOP_RIGHT"],
    sL = (0, e_.xI)(so.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    sy = { leafPosition: { x: 85, y: 125 }, leafRotationDirection: 1 },
    sU = Object.freeze({
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
            ...sy,
            getConfettiPosition: (e) => ({ x: e - 11, y: 125 }),
            confettiVelocityDirection: { x: 1, y: -1 },
        },
        BOTTOM_RIGHT: {
            ...sy,
            getConfettiPosition: (e) => ({ x: 11, y: 125 }),
            confettiVelocityDirection: { x: -1, y: -1 },
        },
    }),
    sD = "falling-leaf",
    sk = ["#61D5B2"],
    sb = n(80705),
    sP = n(232460),
    sG = [sb, sP];
function sH() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function sw(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: s } = e,
        r = a.useRef(null),
        [o, c] = a.useState(null),
        [d] = a.useState(
            i ??
                (function () {
                    switch (Math.floor(Math.random() * Object.keys(sR).length)) {
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
        { createMultipleConfettiAt: u, confettiCanvas: m } = a.useContext(su.x),
        [x, h] = a.useState(null),
        g = (0, sa.f9)(m, x),
        _ = (function (e, t) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    if (sM.includes(t)) return "leaf_peel";
                    return "exit";
                case "leaf_peel":
                    return "leaf_fall";
                case "leaf_fall":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(o, d),
        A = sM.includes(d),
        f = A && "exit" === o,
        E = a.useCallback((e) => {
            c(e);
        }, []),
        C = a.useCallback(() => {
            "exit" === o && t?.();
        }, [t, o]),
        p = a.useCallback((e) => {
            r.current = e;
        }, []);
    return (
        a.useEffect(() => {
            if ("confetti" === o) {
                let { confettiVelocityDirection: e } = sU[d],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sL,
                            i = e?.getBoundingClientRect();
                        if (null == i) return { x: 0, y: 0 };
                        let s = sU[t].getConfettiPosition(n);
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
                let e = sU[d].leafRotationDirection;
                g.createConfetti(
                    {
                        id: `${sD}-${(0, sr.A)()}`,
                        position: {
                            type: "static",
                            value: (function (e, t) {
                                let n = e?.getBoundingClientRect();
                                if (null == n) return { x: 0, y: 0 };
                                let i = sU[t];
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
                    { sprite: "TOP_LEFT" === d ? sb : sP },
                );
            }
        }, [A, g, d, o]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(sa.K_, { ref: h, sprites: sG, colors: sk, spriteWidth: 45, spriteHeight: 45 }),
                (0, l.jsx)(nY.D, {
                    onClick: n,
                    className: eg()(sS.FT, {
                        [sS.FZ]: "TOP_LEFT" === d,
                        [sS.S]: "TOP_RIGHT" === d,
                        [sS.Re]: "BOTTOM_LEFT" === d,
                        [sS._t]: "BOTTOM_RIGHT" === d,
                    }),
                    children: (0, l.jsx)(sc.t, {
                        animationRef: p,
                        className: eg()(sS.oQ, { [sS.EG]: f }),
                        nextScene: _,
                        sceneSegments: sO,
                        onScenePlay: E,
                        onSceneComplete: C,
                        importData: sH,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function sF(e) {
    let t,
        { message: n, compact: i, guild: s, usernameHook: r, onClickMessage: o } = e,
        c = (function (e) {
            switch (e.type) {
                case P.lAJ.GUILD_BOOST_TIER_1:
                    return P.TVA.TIER_1;
                case P.lAJ.GUILD_BOOST_TIER_2:
                    return P.TVA.TIER_2;
                case P.lAJ.GUILD_BOOST_TIER_3:
                    return P.TVA.TIER_3;
            }
            return null;
        })(n),
        d = sg(n),
        { createMultipleConfettiAt: u, addClickListener: m } = a.useContext(su.x),
        [x, h] = a.useState(!1),
        g = a.useRef(null),
        { reducedMotion: _ } = a.useContext(sd.C),
        A = (0, D.Ay)(n),
        f = A.nick,
        E = r(A);
    t =
        null == c || null == s
            ? d > 1
                ? R.intl.format(R.t.yfC9ds, { username: f, usernameHook: E, numSubscriptions: d })
                : R.intl.format(R.t["57St/7"], { username: f, usernameHook: E })
            : d > 1
              ? R.intl.format(R.t.PO9uJD, {
                    username: f,
                    usernameHook: E,
                    numSubscriptions: d,
                    guildName: s.name,
                    newTierName: (0, sf.gb)(c),
                })
              : R.intl.format(R.t.cUfTTE, {
                    username: f,
                    usernameHook: E,
                    guildName: s.name,
                    newTierName: (0, sf.gb)(c),
                });
    let C = a.useCallback(() => {
            if (!_.enabled)
                if (x || 0 !== Math.floor(50 * Math.random())) {
                    let e = g.current?.getBoundingClientRect();
                    if (null == e) return;
                    u(e.left + e.width / 2, e.top + e.height / 2);
                } else h(!0);
        }, [u, _, x]),
        p = a.useCallback(() => {
            h(!1);
        }, []),
        I = a.useCallback(() => {
            (0, sh.O9)({ settingsVisible: !0 }), (0, sA.openUserSettings)(s_.X.POGGERMODE_PANEL), h(!1);
        }, []),
        j = a.useCallback(
            (e, t) => {
                t?.id.startsWith(sD) && I();
            },
            [I],
        );
    a.useEffect(() => m(j));
    let T = a.useCallback(
            (e) => {
                e.target === e.currentTarget && o(e);
            },
            [o],
        ),
        v = (0, l.jsx)(nY.D, {
            className: sS.P0,
            innerRef: g,
            onClick: o,
            children: (0, l.jsx)(iS._, {
                color: eA.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: sS.Kk,
                onMouseEnter: C,
            }),
        });
    return (0, l.jsxs)(N.A, {
        iconNode: v,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, l.jsx)("div", { onClick: T, className: sS.iU, children: t }),
            x
                ? (0, l.jsx)(sx.Ay, {
                      children: (0, l.jsx)("div", {
                          className: sS.LK,
                          children: (0, l.jsx)(sw, { onAnimationComplete: p, onClick: I }),
                      }),
                  })
                : null,
        ],
    });
}
function sV(e) {
    let { message: t, compact: n, guild: i, usernameHook: s } = e,
        { enabled: a, showCta: r } = sm.useConfig({ location: "UserPremiumGuildSubscription" });
    return t.type === P.lAJ.GUILD_BOOST && a && !n
        ? (0, l.jsx)(sv, { message: t, guild: i, usernameHook: s, showCta: r })
        : (0, l.jsx)(sF, { ...e });
}
var sB = n(983851),
    sJ = n(305866),
    sz = n(364522),
    sZ = n(922016),
    sK = n(61230),
    sX = n(538451),
    sW = n(944052),
    sQ = n(202447);
function sY(e) {
    let { users: t, guildId: n, channelId: i } = e;
    return (0, l.jsx)(sJ.l, {
        className: sQ.XM,
        children: (0, l.jsx)(sz.Ip, {
            className: sQ.XG,
            children: (0, l.jsx)("div", {
                children: t.map((e) =>
                    (0, l.jsx)(
                        sX.A,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: tG.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
function sq(e) {
    let { message: t, channel: n, compact: i } = e,
        s = (0, il.A)(t),
        r = (0, sW.X7)(t),
        o = t.messageReference?.channel_id,
        d = (0, c.bG)([tD.A], () => tD.A.getChannel(o)),
        u = (function (e, t, n, i, s, r) {
            let o = (0, I.P)({ user: n, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                c = (0, I.P)({ user: i[0], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                d = (0, I.P)({ user: i[1], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                u = (0, D.Ay)(e),
                [m, x] = i,
                h = (0, D.d8)(m, t),
                g = (0, D.d8)(x, t),
                _ = (function (e, t) {
                    let n = a.useRef(null),
                        [i, s] = a.useState(!1),
                        r = a.useCallback((n) => (0, l.jsx)(sY, { users: n, guildId: e, channelId: t }), [e, t]);
                    return a.useCallback(
                        (e) => (t, a) =>
                            (0, l.jsx)(
                                sZ.Y,
                                {
                                    targetElementRef: n,
                                    renderPopout: () => r(e),
                                    shouldShow: i,
                                    position: "bottom",
                                    onRequestClose: () => s(!1),
                                    children: (e) =>
                                        (0, l.jsx)(nY.D, {
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
                                  sK.T,
                                  {
                                      channel: r,
                                      childWrapperClassName: sQ.c6,
                                      children: (0, l.jsx)(nY.D, { tag: "a", children: e }),
                                  },
                                  t,
                              ),
                    [r],
                );
            return null == s
                ? R.intl.format(R.t["eX6e/3"], { username: u.nick, usernameHook: o(u), channelHook: A })
                : R.intl.format(R.t.YUbgR8, {
                      userCount: i.length + 1,
                      username: u.nick,
                      usernameHook: o(u),
                      username2: h.nick,
                      username2Hook: c(h),
                      username3: g.nick,
                      username3Hook: d(g),
                      otherCount: i.length - 1,
                      othersHook: _([n, ...i]),
                      duration: s,
                  });
        })(t, n, t.author, r, s, d),
        m = a.useMemo(() => {
            let e = (0, l.jsx)(sB.H, { size: "md", color: eA.A.colors.STATUS_POSITIVE });
            return null == d || null != s
                ? e
                : (0, l.jsx)(sK.T, {
                      channel: d,
                      children: (0, l.jsx)(sB.H, { size: "md", color: eA.A.colors.STATUS_POSITIVE }),
                  });
        }, [d, s]);
    return (0, l.jsx)(N.A, {
        iconNode: m,
        iconContainerClassName: sQ.zc,
        timestamp: t.timestamp,
        compact: i,
        children: u,
    });
}
var s$ = n(325278);
function s0(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s } = t,
        { guild_id: r } = n,
        o = t.getChannelId(),
        d = (0, c.bG)([en.A], () => en.A.getGuild(r), [r]),
        u = a.useCallback(() => {
            null != d &&
                (0, p.K4)({
                    guildId: d.id,
                    location: { section: P.JJy.CHANNEL_TEXT_AREA, object: P.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [d]),
        m = (0, I.P)({ user: s, channelId: o, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, l.jsx)(sV, { message: t, compact: i, guild: d, usernameHook: m, onClickMessage: u });
}
function s1(e) {
    let { message: t, compact: n, channel: i } = e,
        s = (0, I.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
    return (0, l.jsx)(ij, { message: t, compact: n, usernameHook: s });
}
let s2 = Object.freeze({
        [P.lAJ.DEFAULT]: void 0,
        [P.lAJ.REPLY]: void 0,
        [P.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [P.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [P.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, c.bG)([S.default], () => S.default.getUser(t.mentions[0]), [t]),
                o = tG.Ay.getName(null, a, r),
                d = (0, I.P)({ user: s, channelId: a, guildId: n.guild_id, messageId: t.id }),
                u = (0, I.P)({ user: r, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, l.jsx)(st, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: r,
                      actorUsernameHook: d,
                      targetUsernameHook: u,
                  })
                : (0, l.jsx)(iq, { message: t, compact: i, otherUsername: o, usernameHook: d, otherUsernameHook: u });
        },
        [P.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, c.bG)([S.default], () => S.default.getUser(t.mentions[0]), [t]),
                o = (0, I.P)({ user: s, channelId: a, guildId: n.guild_id, messageId: t.id }),
                d = (0, I.P)({ user: r, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, l.jsx)(sn, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: r,
                      actorUsernameHook: o,
                      targetUsernameHook: d,
                  })
                : null != r && r.id !== s.id
                  ? (0, l.jsx)(i$, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: o,
                        otherUser: r,
                        otherUsernameHook: d,
                    })
                  : (0, l.jsx)(i$, { message: t, channel: n, usernameHook: o });
        },
        [P.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { id: s, author: r } = t,
                o = T.default.getId(),
                d = t.getChannelId(),
                u = (0, c.bG)([tU.A], () => tU.A.isCallActive(d, s), [d, s]),
                m = (0, c.bG)([tP.A], () => tP.A.getVoiceState(P.ME, o)),
                x = !u && null != t.call && !t.call.participants.includes(o),
                h = u && (null == m || m.channelId !== d),
                _ = a.useCallback(() => g.default.selectVoiceChannel(d), [d]),
                A = (0, I.P)({
                    user: r,
                    channelId: d,
                    guildId: i.guild_id,
                    messageId: t.id,
                    enableDisplayNameStyles: !0,
                });
            return (0, l.jsx)(ia, {
                compact: n,
                message: t,
                missed: x,
                joinable: h,
                usernameHook: A,
                onClickJoinCall: _,
            });
        },
        [P.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, I.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iA, { compact: n, message: t, usernameHook: r, isForumPost: i.isForumPost() });
        },
        [P.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, I.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(im, { compact: n, message: t, usernameHook: r });
        },
        [P.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                r = t.getChannelId(),
                o = a.useCallback(() => {
                    if (tb.A.getChannelId() !== r) {
                        let e = tD.A.getChannel(r);
                        null != e && (0, j.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => eD._.dispatch(P.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [r]),
                c = (0, I.P)({ user: s, channelId: r, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iC, { message: t, compact: n, usernameHook: c, onClickPins: __OVERLAY__ ? null : o });
        },
        [P.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, I.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(sl, { message: t, compact: n, usernameHook: r }),
                    (0, l.jsx)(ty, { channel: i, message: t }),
                ],
            });
        },
        [P.lAJ.GUILD_BOOST]: s0,
        [P.lAJ.GUILD_BOOST_TIER_1]: s0,
        [P.lAJ.GUILD_BOOST_TIER_2]: s0,
        [P.lAJ.GUILD_BOOST_TIER_3]: s0,
        [P.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: s } = t,
                a = t.getChannelId(),
                r = (0, I.P)({ user: s, channelId: a, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(ic, { message: t, compact: n, usernameHook: r });
        },
        [P.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                {
                    author: s,
                    author: { id: r },
                    messageReference: o,
                } = t,
                d = t.getChannelId(),
                u = (0, c.bG)([tk.A], () => tk.A.findActivity(r, (e) => e.type === P.$pd.PLAYING), [r]),
                m = (0, c.bG)([tD.A], () => (null != o ? tD.A.getChannel(o.channel_id) : null), [o]),
                x = o?.guild_id,
                h = (0, I.P)({ user: s, channelId: d, guildId: i.guild_id, messageId: t.id }),
                g = a.useCallback(() => {
                    null != m &&
                        null != x &&
                        (0, _.Nl)({ streamType: s$.U4.GUILD, ownerId: r, channelId: m.id, guildId: x });
                }, [r, m, x]);
            return null != o && null != m && null != o.guild_id
                ? (0, l.jsx)(iK, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: u,
                      onJoinStream: g,
                      usernameHook: h,
                  })
                : null;
        },
        [P.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                s = (0, c.bG)([tD.A], () => tD.A.getChannel(i), [i]),
                a = null != s ? s.getGuildId() : null;
            return (0, l.jsx)(iV, {
                message: t,
                compact: n,
                onClick: () => {
                    null != a && ex.A.open(a, P.BEX.ACCESS, P.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [P.lAJ.GUILD_DISCOVERY_REQUALIFIED]: function (e) {
            let { message: t, compact: i } = e;
            return (0, l.jsx)(N.A, {
                icon: n(222548),
                timestamp: t.timestamp,
                compact: i,
                contentClassName: iF.B,
                children: R.intl.string(R.t.tu6tOR),
            });
        },
        [P.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: function (e) {
            let { message: t, compact: n } = e;
            return (0, l.jsx)(N.A, {
                iconNode: (0, l.jsx)(nW.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: iF.Q,
                }),
                timestamp: t.timestamp,
                compact: n,
                contentClassName: iF.B,
                children: R.intl.string(R.t.vzfXql),
            });
        },
        [P.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: function (e) {
            let { message: t, compact: n } = e;
            return (0, l.jsx)(N.A, {
                iconNode: (0, l.jsx)(nW.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: iF.Q,
                }),
                timestamp: t.timestamp,
                compact: n,
                contentClassName: iF.B,
                children: R.intl.string(R.t["/TfvyR"]),
            });
        },
        [P.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                r = (0, I.P)({ user: t.author, channelId: t.channel_id, guildId: i.guild_id, messageId: t.id }),
                o = a.useCallback(
                    async (e) => {
                        let n = t.messageReference?.channel_id;
                        if (null != n) {
                            await tS.A.loadThread(n);
                            let t = tD.A.getChannel(n);
                            null != t && (0, tO.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                c = a.useCallback(() => {
                    (0, d.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("30108"),
                            n.e("56402"),
                            n.e("51743"),
                            n.e("84042"),
                            n.e("65225"),
                        ]).then(n.bind(n, 126768));
                        return (t) => (0, l.jsx)(e, { channel: i, ...t });
                    });
                }, [i]),
                u = a.useCallback(
                    (e) => {
                        let i = tD.A.getChannel(t.messageReference?.channel_id);
                        null != i &&
                            (0, x.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("26132"),
                                    n.e("91763"),
                                    n.e("38730"),
                                    n.e("34971"),
                                    n.e("3998"),
                                    n.e("43266"),
                                    n.e("91671"),
                                    n.e("12255"),
                                    n.e("40959"),
                                    n.e("96804"),
                                    n.e("21060"),
                                    n.e("21106"),
                                    n.e("40175"),
                                    n.e("43746"),
                                    n.e("90554"),
                                    n.e("99011"),
                                    n.e("85802"),
                                    n.e("65200"),
                                    n.e("26250"),
                                    n.e("51212"),
                                    n.e("84615"),
                                ]).then(n.bind(n, 612826));
                                return (t) => (0, l.jsx)(e, { ...t, channel: i });
                            });
                    },
                    [t],
                );
            return (0, l.jsx)(se, {
                message: t,
                compact: s,
                usernameHook: r,
                onClickThread: o,
                onClickViewThreads: c,
                onContextMenuThread: u,
            });
        },
        [P.lAJ.THREAD_STARTER_MESSAGE]: function (e) {
            let { message: t, compact: n } = e;
            return (0, l.jsx)(N.A, {
                iconNode: (0, l.jsx)(i4.y, { size: "md", color: "currentColor", className: si.K }),
                timestamp: t.timestamp,
                compact: n,
                children: R.intl.string(R.t.OCs36J),
            });
        },
        [P.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [P.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, C.ER)(t) ? (0, l.jsx)(is, { message: t, compact: n, channel: i }) : null;
        },
        [P.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: s1,
        [P.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: s1,
        [P.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                s = (0, I.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iJ, { message: t, compact: n, channel: i, usernameHook: s });
        },
        [P.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                s = (0, I.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id });
            return (0, l.jsx)(iB, { message: t, compact: n, channel: i, usernameHook: s });
        },
        [P.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: function (e) {
            let { channel: t, message: i, compact: s } = e,
                r = (0, D.Ay)(i),
                o = (function (e) {
                    let { author: t, channel: n, message: i } = e,
                        s = n.guild_id,
                        l = (0, I.P)({ user: i.author, channelId: n.id, guildId: s, messageId: i.id })(t),
                        { analyticsLocations: r } = (0, V.Ay)(F.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                        o = i.roleSubscriptionData,
                        c = a.useCallback(() => {
                            (0, j.pX)(P.BVt.CHANNEL(s, er.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: r }),
                                o?.role_subscription_listing_id != null &&
                                    (0, B.xH)(s, n.id, i.id, o.role_subscription_listing_id);
                        }, [s, n, i, o, r]);
                    return null == o
                        ? null
                        : (0, B.gw)({
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
                          (0, l.jsx)(N.A, { icon: n(617184), timestamp: i.timestamp, compact: s, children: o }),
                          c && (0, l.jsx)(ed, { guildId: t.guild_id, user: i.author, username: r.nick }),
                          (0, l.jsx)(es, { channel: t, message: i }),
                      ],
                  });
        },
        [P.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return t.purchaseNotification?.type === A.hE.GUILD_PRODUCT
                ? (0, l.jsx)(w, { message: t, channel: n, compact: i })
                : null;
        },
        [P.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [P.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                a = (0, c.bG)([eu.Ay], () => eu.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i9, { message: t, compact: i, usernameHook: s }),
                    null != a && a.name === t.content ? (0, l.jsx)(em.A, { code: `${n.guild_id}-${a.id}` }) : null,
                ],
            });
        },
        [P.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(i2, { message: t, compact: i, usernameHook: s });
        },
        [P.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(i6, { message: t, compact: i, usernameHook: s });
        },
        [P.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                a = (0, c.bG)([X.A], () => X.A.can(P.xBc.MUTE_MEMBERS, n)),
                r = (0, c.bG)([tT.A], () => tT.A.getParticipant(n.id, t.author.id)),
                o =
                    new Date(Q.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(r?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                d = a && r?.rtsState === tv.zF.REQUESTED_TO_SPEAK && o;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i7, { message: t, compact: i, usernameHook: s }),
                    d
                        ? (0, l.jsx)(u.$, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, tj.lL)(n, t.author.id, !1), h.A.deleteMessage(n.id, t.id, !0);
                              },
                              text: R.intl.string(R.t.f0T7hI),
                              icon: m.L,
                          })
                        : null,
                ],
            });
        },
        [P.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(i5, { message: t, compact: i, usernameHook: s });
        },
        [P.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, D.Ay)(t),
                a = t.application,
                r = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(N.A, {
                iconNode: (0, l.jsx)(ts.q, { size: "md", color: "currentColor", className: tl.C }),
                timestamp: t.timestamp,
                compact: i,
                children: (function (e) {
                    let { application: t, username: n, usernameHook: i = P.tEg } = e;
                    return null != t
                        ? R.intl.format(R.t.dXdgno, { username: n, applicationName: t.name, usernameHook: i })
                        : R.intl.format(R.t.O829Uu, { username: n, usernameHook: i });
                })({ application: a, username: s.nick, usernameHook: r(s) }),
            });
        },
        [P.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                a = (0, D.Ay)(t),
                r = t.application,
                o = (0, I.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id }),
                c = td(i, t);
            return (0, l.jsx)(N.A, {
                icon: n(617184),
                timestamp: t.timestamp,
                compact: s,
                children: (0, tc.eu)({
                    application: r,
                    username: a.nick,
                    usernameHook: o(a),
                    applicationNameHook: null != r ? c(r) : P.tEg,
                }),
            });
        },
        [P.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                a = (0, D.Ay)(t),
                r = t.application,
                o = (0, I.P)({ user: t.author, channelId: i.id, guildId: i.guild_id, messageId: t.id }),
                c = td(i, t);
            return (0, l.jsx)(N.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: s,
                children: (0, tc.A0)({
                    application: r,
                    username: a.nick,
                    usernameHook: o(a),
                    applicationNameHook: null != r ? c(r) : P.tEg,
                }),
            });
        },
        [P.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, l.jsx)(ti, { userTrialOfferId: t.referralTrialOfferId, canRenderReferralEmbed: !0, compact: n });
        },
        [P.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [P.lAJ.CUSTOM_GIFT]: void 0,
        [P.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [P.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [P.lAJ.POLL_RESULT]: function (e) {
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
                            return null != n.name && ((n.animated = n.animated ?? !1), (t.victorEmoji = n)), t;
                        })(r),
                    [r],
                ),
                c = (0, e_.EJ)(o?.questionText ?? "", ep.TU),
                d = (0, D.Ay)(t),
                u = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                m = t.messageReference,
                x = a.useCallback(() => {
                    null != m &&
                        h.A.jumpToMessage({
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
                          (0, l.jsx)(N.A, {
                              iconNode: (0, l.jsx)(ef.Y, { size: "xs" }),
                              timestamp: t.timestamp,
                              compact: i,
                              children: R.intl.format(R.t.VJcK41, {
                                  username: d.nick,
                                  usernameHook: u(d),
                                  title: c,
                                  titleOnClick: x,
                              }),
                          }),
                          (0, l.jsx)(ev, { className: eI.E6, data: o, onClickPollLink: s ? void 0 : x }),
                      ],
                  });
        },
        [P.lAJ.CHANGELOG]: void 0,
        [P.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, l.jsx)(ne, { message: t, channel: n });
        },
        [P.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(i_, { message: t, channel: n, compact: i });
        },
        [P.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                s = (0, c.bG)([S.default], () => S.default.getUser(i?.recipientUserId));
            return null == i || null == s
                ? null
                : (0, l.jsx)(t6, { giftIntentType: i.giftIntentType, recipientUser: s, channel: n });
        },
        [P.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(iY, { message: t, channel: n, author: t.author, compact: i });
        },
        [P.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: c } = M(t, i),
                d = r?.user?.username,
                u = a?.name;
            return (0, l.jsx)(N.A, {
                icon: n(617184),
                timestamp: t.timestamp,
                compact: s,
                children:
                    null != d && null != u
                        ? R.intl.format(R.t["21R6Ch"], {
                              username: d,
                              usernameHook: o(),
                              guildName: u,
                              guildNameClick: c,
                          })
                        : R.intl.string(R.t["2VLV0d"]),
            });
        },
        [P.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: c } = M(t, i),
                d = r?.user?.username,
                u = a?.name;
            return (0, l.jsx)(N.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: s,
                children:
                    null != d && null != u
                        ? R.intl.format(R.t["Bz/QC2"], {
                              username: d,
                              usernameHook: o(),
                              guildName: u,
                              guildNameClick: c,
                          })
                        : R.intl.string(R.t.FVF6qU),
            });
        },
        [P.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: function (e) {
            let { message: t, channel: i, compact: s } = e,
                { guild: a, joinRequest: r, usernameHook: o, guildNameClick: c } = M(t, i),
                d = r?.user?.username,
                u = a?.name;
            return (0, l.jsx)(N.A, {
                icon: n(884797),
                timestamp: t.timestamp,
                compact: s,
                children:
                    null != d && null != u
                        ? R.intl.format(R.t.Kpkesg, { username: d, usernameHook: o(), guildName: u, guildNameClick: c })
                        : R.intl.string(R.t.BMlbE7),
            });
        },
        [P.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [P.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                s = (0, I.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, l.jsx)(E._W, { message: t, channel: n, compact: i, usernameHook: s });
        },
        [P.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [P.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [P.lAJ.REPORT_TO_MOD_BAN_USER]: tN,
        [P.lAJ.REPORT_TO_MOD_KICK_USER]: tN,
        [P.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: tN,
        [P.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: tN,
        [P.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: tN,
        [P.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(eK, { message: t, channel: n, compact: i });
        },
        [P.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(sq, { message: t, channel: n, compact: i });
        },
        [P.lAJ.GUILD_BOOST_UPSELL]: function (e) {
            let { message: t, channel: n } = e;
            return null == t.boostingPrompt ? null : (0, l.jsx)(iw, { boostingPrompt: t.boostingPrompt, channel: n });
        },
        [P.lAJ.FRIEND_REQUEST_ACCEPTED]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, l.jsx)(iN, { message: t, channel: n, compact: i });
        },
    }),
    s3 = a.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: s } = e,
            { type: a } = t,
            r = s2[a];
        if (null == r) {
            var o;
            return (
                (o = Error(`unknown message type ${t.type}`)),
                ek.A.captureException(o),
                new f.A("SystemMessage").error("", o),
                null
            );
        }
        return (0, l.jsx)(t9.Ay, {
            message: t,
            content: (0, tH.Ay)(t).content,
            compact: i ?? !1,
            children: (0, l.jsx)(r, { message: t, channel: n, compact: i, disableInteraction: s }),
        });
    });
function s7(e) {
    let { message: t, channel: n, compact: i, disableInteraction: s } = e;
    return (0, o.A)(t) ? (0, l.jsx)(s3, { message: t, channel: n, compact: i, disableInteraction: s }) : null;
}
