var i = r(384111);
n.certificate = r(201699);
var a = i.define('RSAPrivateKey', function () {
    this.seq().obj(this.key('version').int(), this.key('modulus').int(), this.key('publicExponent').int(), this.key('privateExponent').int(), this.key('prime1').int(), this.key('prime2').int(), this.key('exponent1').int(), this.key('exponent2').int(), this.key('coefficient').int());
});
n.RSAPrivateKey = a;
var o = i.define('RSAPublicKey', function () {
    this.seq().obj(this.key('modulus').int(), this.key('publicExponent').int());
});
n.RSAPublicKey = o;
var s = i.define('SubjectPublicKeyInfo', function () {
    this.seq().obj(this.key('algorithm').use(l), this.key('subjectPublicKey').bitstr());
});
n.PublicKey = s;
var l = i.define('AlgorithmIdentifier', function () {
        this.seq().obj(this.key('algorithm').objid(), this.key('none').null_().optional(), this.key('curve').objid().optional(), this.key('params').seq().obj(this.key('p').int(), this.key('q').int(), this.key('g').int()).optional());
    }),
    u = i.define('PrivateKeyInfo', function () {
        this.seq().obj(this.key('version').int(), this.key('algorithm').use(l), this.key('subjectPrivateKey').octstr());
    });
n.PrivateKey = u;
var c = i.define('EncryptedPrivateKeyInfo', function () {
    this.seq().obj(
        this.key('algorithm')
            .seq()
            .obj(
                this.key('id').objid(),
                this.key('decrypt')
                    .seq()
                    .obj(
                        this.key('kde')
                            .seq()
                            .obj(this.key('id').objid(), this.key('kdeparams').seq().obj(this.key('salt').octstr(), this.key('iters').int())),
                        this.key('cipher').seq().obj(this.key('algo').objid(), this.key('iv').octstr())
                    )
            ),
        this.key('subjectPrivateKey').octstr()
    );
});
n.EncryptedPrivateKey = c;
var d = i.define('DSAPrivateKey', function () {
    this.seq().obj(this.key('version').int(), this.key('p').int(), this.key('q').int(), this.key('g').int(), this.key('pub_key').int(), this.key('priv_key').int());
});
(n.DSAPrivateKey = d),
    (n.DSAparam = i.define('DSAparam', function () {
        this.int();
    }));
var f = i.define('ECPrivateKey', function () {
    this.seq().obj(this.key('version').int(), this.key('privateKey').octstr(), this.key('parameters').optional().explicit(0).use(p), this.key('publicKey').optional().explicit(1).bitstr());
});
n.ECPrivateKey = f;
var p = i.define('ECParameters', function () {
    this.choice({ namedCurve: this.objid() });
});
n.signature = i.define('signature', function () {
    this.seq().obj(this.key('r').int(), this.key('s').int());
});
