"use strict";
n.d(t, { Ij: () => m, IS: () => A, Fm: () => g });
var i = n(627968),
    r = n(64700),
    s = n(702841),
    a = n(939249),
    o = n(534514),
    l = n(734057),
    u = n(790535),
    c = n(82149),
    d = n(446600),
    _ = n(375708);
function f(e) {
    let { activity: t } = e,
        { channelId: n } = (0, c.UW)(t) ?? {},
        f = (0, s.bG)([d.A], () => d.A.getStageInstanceByChannel(n), [n]),
        h = r.useRef(null),
        p = r.useCallback(() => {
            let e = l.A.getChannel(n);
            null != e && u.av(e);
        }, [n]),
        E = f?.topic ?? t.name,
        m = _.intl.formatToPlainString(_.t["T+DNAA"], { channel: E });
    return (0, i.jsx)("div", {
        ref: h,
        children: (0, i.jsx)(a.D, {
            onClick: p,
            focusProps: { ringTarget: h },
            children: (0, i.jsx)(o.D, { variant: "heading-sm/semibold", children: m }),
        }),
    });
}
var h = n(516607),
    p = n(492213);
let E = {
    [h.SS]: new (class {
        shouldShow(e) {
            return (0, c.IS)(e);
        }
        createHeader(e) {
            return { subtitle: _.intl.string(_.t["+AJFJy"]), icon: null };
        }
        body = f;
    })(),
};
function m(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = E[t];
    if (null != n && n.shouldShow?.(e) !== !1) return n.createHeader(e);
}
function g(e) {
    let t = e.application_id;
    if (null == t) return;
    let n = E[t];
    if (n?.body != null && n.shouldShow?.(e) !== !1) {
        let r = n.body;
        return (0, i.jsx)("section", { className: p.uW, children: (0, i.jsx)(r, { activity: e }) }, `delegate-${t}`);
    }
}
function A(e) {
    let t = e.application_id;
    if (null == t) return !0;
    let n = E[t];
    return null == n || n.shouldShow?.(e) !== !1;
}
