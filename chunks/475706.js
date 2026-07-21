"use strict";
n.d(t, { Ij: () => f, IS: () => T, Fm: () => p });
var i = n(627968),
    r = n(64700),
    a = n(702841),
    s = n(939249),
    l = n(297264),
    o = n(734057),
    d = n(790535),
    c = n(82149),
    u = n(446600),
    _ = n(375708);
function E(e) {
    let { activity: t } = e,
        { channelId: n } = (0, c.UW)(t) ?? {},
        E = (0, a.bG)([u.A], () => u.A.getStageInstanceByChannel(n), [n]),
        A = r.useRef(null),
        h = r.useCallback(() => {
            let e = o.A.getChannel(n);
            null != e && d.av(e);
        }, [n]),
        I = E?.topic ?? t.name,
        f = _.intl.formatToPlainString(_.t["T+DNAA"], { channel: I });
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(s.D, {
            onClick: h,
            focusProps: { ringTarget: A },
            children: (0, i.jsx)(l.D, { variant: "heading-sm/semibold", children: f }),
        }),
    });
}
var A = n(516607),
    h = n(30157);
let I = {
    [A.SS]: new (class {
        shouldShow(e) {
            return (0, c.IS)(e);
        }
        createHeader(e) {
            return { subtitle: _.intl.string(_.t["+AJFJy"]), icon: null };
        }
        body = E;
    })(),
};
function f(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = I[t];
    if (null != n && n.shouldShow?.(e) !== !1) return n.createHeader(e);
}
function p(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = I[t];
    if (n?.body != null && n.shouldShow?.(e) !== !1) {
        let r = n.body;
        return (0, i.jsx)("section", { className: h.uW, children: (0, i.jsx)(r, { activity: e }) }, `delegate-${t}`);
    }
}
function T(e) {
    let t = e.application_id;
    if (null == t) return !0;
    let n = I[t];
    return null == n || n.shouldShow?.(e) !== !1;
}
