var r = n(127849),
    i = n(476078),
    o = n(796138),
    a = function (e) {
        return i.slice(0, e.length) === e;
    };
e.exports = (function () {
    return a('Bun/') ? 'BUN' : a('Cloudflare-Workers') ? 'CLOUDFLARE' : a('Deno/') ? 'DENO' : a('Node.js/') ? 'NODE' : r.Bun && 'string' == typeof Bun.version ? 'BUN' : r.Deno && 'object' == typeof Deno.version ? 'DENO' : 'process' === o(r.process) ? 'NODE' : r.window && r.document ? 'BROWSER' : 'REST';
})();
