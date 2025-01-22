let r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
    i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
    a = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    o = /^(.*)#[0-9]{1,5}$/,
    s = /^(https:\/\/)?(discord\.com\/discovery\/game\/)([0-9-]+)\/?/,
    l = ['@', '#', ':', '```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage'],
    u = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord'];
function c(e) {
    return r.test(e);
}
function d(e) {
    return i.test(e);
}
function f(e) {
    return a.test(e);
}
function p(e) {
    let n = o.exec(e);
    if (null != n && n.length > 1) {
        let e = n[1],
            r = l.some((n) => e.includes(n)),
            i = u.includes(e);
        return !r && !i;
    }
    return !1;
}
function h(e) {
    return s.test(e);
}
n.Z = {
    isEmail: c,
    isInvite: d,
    isPhoneNumber: f,
    isUserTagLike: p,
    isDiscoveryLink: h
};
