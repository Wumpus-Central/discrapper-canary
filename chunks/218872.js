n.d(t, { M: () => r }), n(704826), n(35282), n(539854);
let i = /[^0-9/]/g;
function r(e) {
    let t = e.replace(i, '').split('/'),
        n = t[0],
        r = t[1],
        s = [];
    return parseInt(n, 10) > 12 && (n = n.substring(0, 1)), s.push(n), (parseInt(n, 10) > 1 || 2 === n.length || (null != r && '' !== r)) && s.push('/'), null != r && '' !== r && parseInt(r, 10) > 99 && (r = (r + '').substring(0, 2)), s.push(r), s.join('');
}
