n.d(t, { Z: () => y }), n(47120);
var i = n(544891),
    r = n(147913),
    a = n(680089),
    s = n(592125),
    o = n(70956),
    l = n(981631);
function u(e, t, n) {
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
let c = {},
    d = 0,
    f = 15 * o.Z.Millis.SECOND;
function _() {
    c = { ...a.Z.getCollapsedCategories() };
}
function p() {
    __OVERLAY__ || (clearTimeout(d), (d = setTimeout(() => m({}), f)));
}
async function h(e, t) {
    null == e || e === l.ME
        ? await i.tn.patch({
              url: l.ANM.USER_GUILD_SETTINGS(l.ME),
              body: t,
              rejectWithError: !1
          })
        : await m(null != t ? { [null != e ? e : l.ME]: t } : {});
}
async function m(e) {
    clearTimeout(d);
    let t = 0 !== Object.keys(e).length,
        n = a.Z.getCollapsedCategories(),
        r = g();
    for (let i in r) {
        let r = s.Z.getChannel(i);
        null != r &&
            null != r.guild_id &&
            (r.guild_id in e || (e[r.guild_id] = {}),
            null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}),
            (e[r.guild_id].channel_overrides[r.id] = {
                ...e[r.guild_id].channel_overrides[r.id],
                collapsed: r.id in n
            }),
            (t = !0));
    }
    return t
        ? ((c = { ...n }),
          delete e[l.I_8],
          (
              await i.tn.patch({
                  url: l.ANM.USER_GUILD_SETTINGS_BULK,
                  body: { guilds: e },
                  rejectWithError: !1
              })
          ).body)
        : [];
}
function g() {
    let e = {},
        t = a.Z.getCollapsedCategories();
    for (let n in t) t[n] !== c[n] && (e[n] = !0);
    for (let n in c) t[n] !== c[n] && (e[n] = !0);
    return e;
}
function E() {
    c = { ...a.Z.getCollapsedCategories() };
}
class v extends r.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                CATEGORY_COLLAPSE: p,
                CATEGORY_EXPAND: p,
                CATEGORY_COLLAPSE_ALL: p,
                CATEGORY_EXPAND_ALL: p,
                POST_CONNECTION_OPEN: _,
                USER_GUILD_SETTINGS_FULL_UPDATE: E
            }),
            u(this, 'saveUserGuildSettings', h),
            u(this, 'saveUserGuildSettingsBulk', m);
    }
}
let y = new v();
