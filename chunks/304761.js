n.d(t, {
    C: () => g,
    Z: () => l
});
var i,
    r = n(442837),
    a = n(570140),
    s = n(865427);
function o(e, t, n) {
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
var l = (function (e) {
    return (e[(e.NotResolved = 0)] = 'NotResolved'), (e[(e.Resolving = 1)] = 'Resolving'), (e[(e.Resolved = 2)] = 'Resolved'), (e[(e.Invalid = 3)] = 'Invalid'), e;
})({});
let u = 0,
    c = null,
    d = {};
function f() {
    0 === u &&
        ((u = 1),
        (0, s.Ce)().then((e) => {
            a.Z.dispatch({
                type: 'CURRENT_BUILD_OVERRIDE_RESOLVED',
                overrides: e
            });
        }));
}
function _(e) {
    let { overrides: t } = e;
    (u = 2), (c = t);
}
function p(e) {
    if (e in d) return;
    let t = (0, s.r4)(e);
    if (null == t) {
        d = {
            ...d,
            [e]: {
                url: e,
                state: 3
            }
        };
        return;
    }
    (d = {
        ...d,
        [e]: {
            url: e,
            validatedURL: t.url,
            payload: String(t.payload),
            state: 1
        }
    }),
        (0, s._I)(t.url).then((t) => {
            a.Z.dispatch({
                type: 'BUILD_OVERRIDE_RESOLVED',
                url: e,
                override: t
            });
        });
}
function h(e) {
    let { url: t, override: n } = e,
        i = null == n ? 3 : 2;
    d = {
        ...d,
        [t]: {
            ...d[t],
            state: i,
            override: n
        }
    };
}
class m extends (i = r.ZP.Store) {
    getCurrentBuildOverride() {
        return (
            f(),
            {
                state: u,
                overrides: c
            }
        );
    }
    getBuildOverride(e) {
        return p(e), d[e];
    }
    getBuildOverrides() {
        return d;
    }
}
o(m, 'displayName', 'BuildOverrideStore');
let g = new m(a.Z, {
    BUILD_OVERRIDE_RESOLVED: h,
    CURRENT_BUILD_OVERRIDE_RESOLVED: _
});
