n.d(t, { U: () => p });
var r = n(255367),
    i = n(73800),
    a = n(399606),
    o = n(481060),
    s = n(592125),
    l = n(922482),
    c = n(750154),
    u = n(427679),
    d = n(388032);
function _(e, t, n) {
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
function f(e) {
    var t, n;
    let { activity: _ } = e,
        { channelId: f } = null != (t = (0, c.rq)(_)) ? t : {},
        p = (0, a.e7)([u.Z], () => u.Z.getStageInstanceByChannel(f), [f]),
        h = i.useRef(null),
        m = i.useCallback(() => {
            let e = s.Z.getChannel(f);
            null != e && l.Cq(e);
        }, [f]),
        g = null != (n = null == p ? void 0 : p.topic) ? n : _.name,
        E = d.intl.formatToPlainString(d.t['T+DNAA'], { channel: g });
    return (0, r.jsx)('div', {
        ref: h,
        children: (0, r.jsx)(o.P3F, {
            onClick: m,
            focusProps: { ringTarget: h },
            children: (0, r.jsx)(o.X6q, {
                variant: 'heading-sm/semibold',
                children: E
            })
        })
    });
}
class p {
    shouldShow(e) {
        return (0, c.JE)(e);
    }
    createHeader(e) {
        return {
            subtitle: d.intl.string(d.t['+AJFJy']),
            icon: null
        };
    }
    constructor() {
        _(this, 'body', f);
    }
}
