r.d(n, {
    Cb: function () {
        return o;
    },
    KF: function () {
        return d;
    },
    Mq: function () {
        return g;
    },
    Q0: function () {
        return s;
    },
    Rh: function () {
        return E;
    },
    aA: function () {
        return m;
    },
    dU: function () {
        return c;
    },
    dX: function () {
        return l;
    },
    kq: function () {
        return f;
    },
    m9: function () {
        return u;
    },
    y0: function () {
        return p;
    }
});
var i = r(876215),
    a = r(758713);
function o(e) {
    return (null == e ? void 0 : e.content_type) === i.s.PLAYED_GAME;
}
function s(e) {
    return (null == e ? void 0 : e.content_type) === i.s.TOP_GAME;
}
function l(e) {
    return o(e) || s(e);
}
function u(e) {
    return (null == e ? void 0 : e.extra) != null && 'application_id' in (null == e ? void 0 : e.extra);
}
function c(e) {
    return (null == e ? void 0 : e.content_type) === i.s.LISTENED_SESSION;
}
function d(e) {
    return (null == e ? void 0 : e.content_type) === i.s.TOP_ARTIST;
}
function f(e) {
    return c(e) || d(e);
}
function p(e) {
    return (null == e ? void 0 : e.content_type) === i.s.WATCHED_MEDIA;
}
function h(e) {
    return !!l(e) && e.extra.platform === a.z.XBOX;
}
function _(e) {
    return !!l(e) && e.extra.platform === a.z.PLAYSTATION;
}
function m(e) {
    return h(e) || _(e);
}
function g(e) {
    return (null == e ? void 0 : e.content_type) === i.s.LAUNCHED_ACTIVITY;
}
function E(e) {
    return l(e) || c(e) || p(e) || u(e);
}
