var r = n(127849),
    i = n(476078),
    a = n(796138),
    o = function (e) {
        return i.slice(0, e.length) === e;
    };
e.exports = (function () {
    return o('Bun/') ? 'BUN' : o('Cloudflare-Workers') ? 'CLOUDFLARE' : o('Deno/') ? 'DENO' : o('Node.js/') ? 'NODE' : r.Bun && 'string' == typeof Bun.version ? 'BUN' : r.Deno && 'object' == typeof Deno.version ? 'DENO' : 'process' === a(r.process) ? 'NODE' : r.window && r.document ? 'BROWSER' : 'REST';
})();
