Object.defineProperty(n, '__esModule', { value: !0 }), (n.InternalIntlMessage = void 0);
let i = r(485340);
class a {
    constructor(e, n) {
        (this.locale = n), (this.ast = (0, i.isCompressedAst)(e) ? e : (0, i.compressFormatJsToAst)(e));
    }
    reserialize() {
        if ('string' == typeof this.ast) return this.ast;
        let e = { value: '' };
        return o(this.ast, e), e.value;
    }
}
function o(e, n) {
    for (let r of e) {
        if ('string' == typeof r) {
            n.value += r;
            continue;
        }
        switch (r[0]) {
            case i.FormatJsNodeType.Argument:
                n.value += '{' + r[1] + '}';
                break;
            case i.FormatJsNodeType.Date:
                (n.value += '{' + r[1] + ', date'), null != r[2] && (n.value += ', ' + r[2]), (n.value += '}');
                break;
            case i.FormatJsNodeType.Time:
                (n.value += '{' + r[1] + ', time'), null != r[2] && (n.value += ', ' + r[2]), (n.value += '}');
                break;
            case i.FormatJsNodeType.Number:
                (n.value += '{' + r[1] + ', number'), null != r[2] && (n.value += ', ' + r[2]), (n.value += '}');
                break;
            case i.FormatJsNodeType.Plural: {
                let e = 'ordinal' == r[4] ? 'selectordinal' : 'plural';
                for (let [i, a] of ((n.value += '{' + r[1] + ', ' + e + ','), r[3] && (n.value += ' offset:' + r[3]), Object.entries(r[2]))) (n.value += ' ' + i + ' {'), o(a, n), (n.value += '}');
                n.value += '}';
                break;
            }
            case i.FormatJsNodeType.Pound:
                n.value += '#';
                break;
            case i.FormatJsNodeType.Select:
                for (let [e, i] of ((n.value += '{' + r[1] + ', select,'), Object.entries(r[2]))) (n.value += ' ' + e + ' {'), o(i, n), (n.value += '}');
                n.value += '}';
                break;
            case i.FormatJsNodeType.Tag:
                s(r, n);
        }
    }
}
function s(e, n) {
    switch (e[1]) {
        case '$b':
            (n.value += '**'), o(e[2], n), (n.value += '**');
            break;
        case '$i':
            (n.value += '*'), o(e[2], n), (n.value += '*');
            break;
        case '$code':
            (n.value += '`'), o(e[2], n), (n.value += '`');
            break;
        case '$p':
            o(e[2], n), (n.value += '\n\n');
            break;
        case '$link':
            let r = e[2],
                i = e[3];
            (n.value += '['), o(r, n), (n.value += ']('), null != i && o(i, n), (n.value += ')');
            break;
        default:
            (n.value += '$['), o(e[2], n), (n.value += '](' + e[1] + ')');
    }
}
n.InternalIntlMessage = a;
