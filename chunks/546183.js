"use strict";
n.r(t), n.d(t, { FetchState: () => l, default: () => T }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(734057),
    s = n(134861),
    o = n(320501),
    l = (function (e) {
        return (e.NOT_FETCHED = "NOT_FETCHED"), (e.FETCHING = "FETCHING"), (e.FETCHED = "FETCHED"), e;
    })({});
let u = new Map(),
    c = [],
    d = [],
    _ = "NOT_FETCHED",
    f = new Map();
function p() {
    (_ = "FETCHING"), f.clear();
}
function h(e) {
    f.set(e.applicationId, "FETCHING");
}
function m(e) {
    f.set(e.applicationId, "FETCHED"),
        e.tokens.forEach((e) => {
            (c = c.filter((t) => t.id !== e.id)),
                u.set(e.application.id, e),
                c.push(e),
                null == e.application.parent_id && d.push(e);
        });
}
function g(e) {
    (_ = "FETCHED"),
        f.clear(),
        (u = new Map(e.tokens.map((e) => [e.application.id, e]))),
        (d = (c = e.tokens).filter((e) => {
            let { application: t } = e;
            return null == t.parent_id;
        }));
}
function E(e) {
    let { id: t, application: n, scopes: r } = e,
        i = u.get(n.id);
    null != i &&
        ((c = c.filter((e) => {
            let { application: t } = e;
            return t.id !== i.application.id;
        })),
        (d = d.filter((e) => {
            let { application: t } = e;
            return t.id !== i.application.id;
        })));
    let a = { id: t, application: n, scopes: r };
    u.set(a.application.id, a), (c = [...c, a]), null == a.application.parent_id && (d = [...d, a]);
}
function A(e) {
    let { id: t, applicationId: n } = e,
        r = u.get(n);
    if (null == r || r.id !== t) return !1;
    u.delete(r.application.id),
        (c = c.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        })),
        (d = d.filter((e) => {
            let { id: t } = e;
            return t !== r.id;
        }));
}
class I extends r.Ay.Store {
    static displayName = "AuthorizedAppsStore";
    initialize() {
        this.waitFor(a.A, s.A, o.A);
    }
    getNewestTokenForApplication(e) {
        return null == e ? null : (u.get(e) ?? null);
    }
    getNewestTokens() {
        return c;
    }
    getNewestTokensForNonChildrenApplications() {
        return d;
    }
    getFetchState() {
        return _;
    }
    getFetchStateForApplication(e) {
        return "FETCHED" === _ ? _ : (f.get(e) ?? _);
    }
}
let T = new I(i.h, {
    USER_AUTHORIZED_APPS_REQUEST: p,
    USER_AUTHORIZED_APPS_REQUEST_BY_ID: h,
    USER_AUTHORIZED_APPS_UPDATE: g,
    USER_AUTHORIZED_APPS_UPDATE_BY_ID: m,
    OAUTH2_TOKEN_CREATE: E,
    OAUTH2_TOKEN_DELETE: A,
});
