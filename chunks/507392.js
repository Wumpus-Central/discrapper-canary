"use strict";
(e.exports = function (e) {
    var t = this,
        n = t.constructor;
    return (
        (t.callbacks = {}),
        (t.directMap = {}),
        (t.sequenceLevels = {}),
        t.resetTimer,
        (t.ignoreNextKeyup = !1),
        (t.ignoreNextKeypress = !1),
        (t.nextExpectedAction = !1),
        (t.element = e),
        t.addEvents(),
        n.instances.push(t),
        t
    );
}),
    (e.exports.prototype.bind = n(983498)),
    (e.exports.prototype.bindMultiple = n(91518)),
    (e.exports.prototype.unbind = n(630061)),
    (e.exports.prototype.trigger = n(993597)),
    (e.exports.prototype.reset = n(385238)),
    (e.exports.prototype.stopCallback = n(549198)),
    (e.exports.prototype.handleKey = n(560096)),
    (e.exports.prototype.addEvents = n(966559)),
    (e.exports.prototype.bindSingle = n(493526)),
    (e.exports.prototype.getKeyInfo = n(932318)),
    (e.exports.prototype.pickBestAction = n(613460)),
    (e.exports.prototype.getReverseMap = n(799689)),
    (e.exports.prototype.getMatches = n(641900)),
    (e.exports.prototype.resetSequences = n(639562)),
    (e.exports.prototype.fireCallback = n(980162)),
    (e.exports.prototype.bindSequence = n(226955)),
    (e.exports.prototype.resetSequenceTimer = n(701482)),
    (e.exports.prototype.detach = n(935534)),
    (e.exports.instances = []),
    (e.exports.reset = n(679327)),
    (e.exports.REVERSE_MAP = null);
