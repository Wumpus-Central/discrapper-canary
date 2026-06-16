var o =
    (this && this.__importDefault) ||
    function (r) {
        return r && r.__esModule ? r : { default: r };
    };
Object.defineProperty(e, "__esModule", { value: !0 });
var a = o(t(319448)),
    n =
        String.fromCodePoint ||
        function (r) {
            var e = "";
            return (
                r > 65535 &&
                    ((r -= 65536), (e += String.fromCharCode(((r >>> 10) & 1023) | 55296)), (r = 56320 | (1023 & r))),
                (e += String.fromCharCode(r))
            );
        };
e.default = function (r) {
    return (r >= 55296 && r <= 57343) || r > 1114111 ? "\uFFFD" : (r in a.default && (r = a.default[r]), n(r));
};
