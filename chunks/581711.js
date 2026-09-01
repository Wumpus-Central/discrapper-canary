var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 });
let a = n(r(92784));
class i extends a.default {
    patternBetween() {
        return RegExp("^\\s*(?:,|\xe0)?\\s*$");
    }
}
t.default = i;
