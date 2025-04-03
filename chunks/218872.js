n.d(t, { M: () => i }), n(757143), n(301563), n(653041);
let r = /[^0-9/]/g;
function i(e) {
    let t = e.replace(r, '').split('/'),
        n = t[0],
        i = t[1],
        s = [];
    return parseInt(n, 10) > 12 && (n = n.substring(0, 1)), s.push(n), (parseInt(n, 10) > 1 || 2 === n.length || (null != i && '' !== i)) && s.push('/'), null != i && '' !== i && parseInt(i, 10) > 99 && (i = (i + '').substring(0, 2)), s.push(i), s.join('');
}
