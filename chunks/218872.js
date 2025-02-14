n.d(t, { M: () => s }), n(757143), n(653041);
let i = /[^0-9/]/g;
function s(e) {
    let t = e.replace(i, '').split('/'),
        n = t[0],
        s = t[1],
        r = [];
    return parseInt(n, 10) > 12 && (n = n.substring(0, 1)), r.push(n), (parseInt(n, 10) > 1 || 2 === n.length || (null != s && '' !== s)) && r.push('/'), null != s && '' !== s && parseInt(s, 10) > 99 && (s = (s + '').substring(0, 2)), r.push(s), r.join('');
}
